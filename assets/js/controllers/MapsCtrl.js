define(function() {
    return ['$scope', '$http', function($scope, $http) {

	$scope.message="Ya-maps test!";
	$scope.geoObjects=[
    {
        geometry: {
            type: 'LineString',
            coordinates: [
                [37.50,55.80],
                [37.40,55.70]
            ]
        },
        properties: {
            hintContent: "Я геообъект",
            balloonContent: "Меня можно перетащить"
        }
    }];
	var routePoints = [
		'Москва, улица Крылатские холмы',
		{
			point: 'Москва, метро Молодежная',
			// метро "Молодежная" - транзитная точка
			// (проезжать через эту точку, но не останавливаться в ней).
			type: 'viaPoint'
		},
		[55.731272, 37.447198], // метро "Кунцевская".
		'Москва, метро Пионерская'
	];
	$scope.route = function(map){
			ymaps.route(routePoints).then(function (route) {
			map.geoObjects.add(route);
			// Зададим содержание иконок начальной и конечной точкам маршрута.
			// С помощью метода getWayPoints() получаем массив точек маршрута.
			// Массив транзитных точек маршрута можно получить с помощью метода getViaPoints.
			var points = route.getWayPoints(),
				lastPoint = points.getLength() - 1;
			// Задаем стиль метки - иконки будут красного цвета, и
			// их изображения будут растягиваться под контент.
			points.options.set('preset', 'twirl#redStretchyIcon');
			// Задаем контент меток в начальной и конечной точках.
			points.get(0).properties.set('iconContent', 'Точка отправления');
			points.get(lastPoint).properties.set('iconContent', 'Точка прибытия');

			// Проанализируем маршрут по сегментам.
			// Сегмент - участок маршрута, который нужно проехать до следующего
			// изменения направления движения.
			// Для того, чтобы получить сегменты маршрута, сначала необходимо получить
			// отдельно каждый путь маршрута.
			// Весь маршрут делится на два пути:
			// 1) от улицы Крылатские холмы до станции "Кунцевская";
			// 2) от станции "Кунцевская" до "Пионерская".

			var way,
				segments,
				path=['Трогаемся'];
			// Получаем массив путей.
			for (var i = 0; i < route.getPaths().getLength(); i++) {
				way = route.getPaths().get(i);
				segments = way.getSegments();
				for (var j = 0; j < segments.length; j++) {
					var street = segments[j].getStreet();
					path.push('Едем ' + segments[j].getHumanAction() +
						(street ? ' на ' + street : '') +
						', проезжаем ' + segments[j].getLength() + ' м.,'
					);
				}
			}
			path.push('Останавливаемся');
			$scope.$apply(function(){
				$scope.path = path;
			});
		}, function (error) {
			alert('Возникла ошибка: ' + error.message);
		});
	};
    }]
})