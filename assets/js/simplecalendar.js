var calendar = {

    init: function(d) {

        /**
         * Get current date
         */
        
        var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

        /**
         * Get current month and set as '.current-month' in title
         */
        var monthNumber = d.getMonth() + 1;

        function GetMonthName(monthNumber) {
            var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            return months[monthNumber - 1];
        }

        /*Create calendar table*/

        function createCalendar(id, year, month) {
          var elem = document.getElementById(id);

          var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
          var d = new Date(year, mon);

          var table = '<table><thead><tr><td>Пн</td><td>Вт</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вс</td></tr></thead><tbody><tr>';

          // заполнить первый ряд от понедельника
          // и до дня, с которого начинается месяц
          // * * * | 1  2  3  4
          for (var i = 0; i < getDay(d); i++) {
            table += '<td></td>';
          }

          // ячейки календаря с датами
          while (d.getMonth() == mon) {
            table += '<td date-month="'+ month +'" date-day="' + d.getDate() + '">' + d.getDate() + '</td>';

            if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
              table += '</tr><tr>';
            }

            d.setDate(d.getDate() + 1);
          }

          // добить таблицу пустыми ячейками, если нужно
          if (getDay(d) != 0) {
            for (var i = getDay(d); i < 7; i++) {
              table += '<td></td>';
            }
          }

          // закрыть таблицу
          table += '</tr></tbody></table>';

          // только одно присваивание innerHTML
          elem.innerHTML = table;
        }

        function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
              var day = date.getDay();
              if (day == 0) day = 7;
              return day - 1;
        }

        /* Generate calendar for current month */

        createCalendar("calendar", d.getFullYear(), monthNumber)

       /* Set month and year in title */

        $('.month').text(GetMonthName(monthNumber) + " " + d.getFullYear());
       

        /**
         * Get current day and set as '.current-day'
         */
        $('tbody td[date-day="' + d.getDate() + '"]').addClass('current-day');

        /**
         * Add class '.active-day' on calendar date
         */
        $('tbody td').on('click', function(e) {
            if ($(this).hasClass('event')) {
                $('tbody td').removeClass('active-day');
                $(this).addClass('active-day');
            } else {
                $('tbody td').removeClass('active-day');
            };
        });

        /*Get event's data from server files*/

        $("#div1").load("events.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                /*if success - add '.event' class to all days that has an event */
                $('.day-event').each(function(i) {
                    var eventMonth = $(this).attr('date-month');
                    var eventDay = $(this).attr('date-day');
                    $('tbody tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass('event');
                });
            if(statusTxt == "error")
                alert("Не удалось получить данные о предстоящих событиях\r\nError: " + xhr.status + ": " + xhr.statusText);
        });
        /**
         * Add '.event' class to all days that has an event
         *
        $('.day-event').each(function(i) {
            var eventMonth = $(this).attr('date-month');
            var eventDay = $(this).attr('date-day');
            $('tbody tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass('event');
        });

        /**
         * Get current day on click in calendar
         * and find day-event to display
         */
        $('tbody td').on('click', function(e) {
            $('.day-event').slideUp('fast');
            var monthEvent = $(this).attr('date-month');
            var dayEvent = $(this).text();
            $('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"]').slideDown('fast');
        });

        /**
         * Close day-event
         *
        $('.close').on('click', function(e) {
            $(this).parent().slideUp('fast');
        });

        /**
         * Save & Remove to/from personal list
         */
        $('.save').click(function() {
            if (this.checked) {
                $(this).next().text('Remove from personal list');
                var eventHtml = $(this).closest('.day-event').html();
                var eventMonth = $(this).closest('.day-event').attr('date-month');
                var eventDay = $(this).closest('.day-event').attr('date-day');
                var eventNumber = $(this).closest('.day-event').attr('data-number');
                $('.person-list').append('<div class="day" date-month="' + eventMonth + '" date-day="' + eventDay + '" data-number="' + eventNumber + '" style="display:none;">' + eventHtml + '</div>');
                $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').slideDown('fast');
                $('.day').find('.close').remove();
                $('.day').find('.save').removeClass('save').addClass('remove');
                $('.day').find('.remove').next().addClass('hidden-print');
                remove();
                sortlist();
            } else {
                $(this).next().text('Save to personal list');
                var eventMonth = $(this).closest('.day-event').attr('date-month');
                var eventDay = $(this).closest('.day-event').attr('date-day');
                var eventNumber = $(this).closest('.day-event').attr('data-number');
                $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
                setTimeout(function() {
                    $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
                }, 1500);
            }
        });

        function remove() {
            $('.remove').click(function() {
                if (this.checked) {
                    $(this).next().text('Remove from personal list');
                    var eventMonth = $(this).closest('.day').attr('date-month');
                    var eventDay = $(this).closest('.day').attr('date-day');
                    var eventNumber = $(this).closest('.day').attr('data-number');
                    $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
                    $('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('.save').attr('checked', false);
                    $('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('span').text('Save to personal list');
                    setTimeout(function() {
                        $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
                    }, 1500);
                }
            });
        }

        /**
         * Sort personal list
         */
        function sortlist() {
            var personList = $('.person-list');

            personList.find('.day').sort(function(a, b) {
                return +a.getAttribute('date-day') - +b.getAttribute('date-day');
            }).appendTo(personList);
        }

        /**
         * Print button
         */
        $('.print-btn').click(function() {
            window.print();
        });

    },
};

$(document).ready(function() {
    $("#div1").load("demo_test.txt");
    var d = new Date();
    calendar.init(d);
    /*$('li').hover(
       function(){ $(this).addClass('w3-card-8') },
       function(){ $(this).removeClass('w3-card-8') }
       )*/
});