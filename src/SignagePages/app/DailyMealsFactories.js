var Pages;
(function (Pages) {
    (function (Factories) {
        Factories.DayRepository = [
            dayRepository
        ];
        function dayRepository() {
            return {
                getDays: function () {
                    var dummyDays = [
                        {
                            date: '01.04.2012',
                            info: 'April Fools Day',
                            menus: [
                                {
                                    row1: 'Gulasch',
                                    row2: 'Nudeln',
                                    price: '5.9'
                                }, 
                                {
                                    row1: 'Tolles',
                                    row2: 'Essen',
                                    price: '6.9'
                                }, 
                                {
                                    row1: 'Einfach',
                                    row2: 'Suppe',
                                    price: '4.9'
                                }
                            ]
                        }, 
                        {
                            date: '02.04.2012',
                            info: '',
                            menus: [
                                {
                                    row1: 'Gulasch',
                                    row2: 'Nudeln',
                                    price: 5.9
                                }, 
                                {
                                    row1: 'Tolles',
                                    row2: 'Essen',
                                    price: 6.9
                                }, 
                                {
                                    row1: 'Einfach',
                                    row2: 'Suppe',
                                    price: 4.9
                                }
                            ]
                        }, 
                        {
                            date: '03.04.2012',
                            info: '',
                            menus: [
                                {
                                    row1: 'Gulasch',
                                    row2: 'Nudeln',
                                    price: 5.9
                                }, 
                                {
                                    row1: 'Tolles',
                                    row2: 'Essen',
                                    price: 6.9
                                }, 
                                {
                                    row1: 'Einfach',
                                    row2: 'Suppe',
                                    price: 4.9
                                }
                            ]
                        }, 
                        {
                            date: '04.04.2012',
                            info: '',
                            menus: [
                                {
                                    row1: 'Gulasch',
                                    row2: 'Nudeln',
                                    price: 5.9
                                }, 
                                {
                                    row1: 'Tolles',
                                    row2: 'Essen',
                                    price: 6.9
                                }, 
                                {
                                    row1: 'Einfach',
                                    row2: 'Suppe',
                                    price: 4.9
                                }
                            ]
                        }, 
                        {
                            date: '05.04.2012',
                            info: '',
                            menus: [
                                {
                                    row1: 'Gulasch',
                                    row2: 'Nudeln',
                                    price: 5.9
                                }, 
                                {
                                    row1: 'Tolles',
                                    row2: 'Essen',
                                    price: 6.9
                                }, 
                                {
                                    row1: 'Einfach',
                                    row2: 'Suppe',
                                    price: 4.9
                                }
                            ]
                        }
                    ];
                    return dummyDays;
                }
            };
        }
    })(Pages.Factories || (Pages.Factories = {}));
    var Factories = Pages.Factories;
})(Pages || (Pages = {}));
