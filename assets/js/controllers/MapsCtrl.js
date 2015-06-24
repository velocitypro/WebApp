define(function() {
    return ['$scope', '$http', function($scope, $http) {

	$scope.routeTitle="";
	$scope.routeDescription="";
	var _route=null;
	var routePoints = [
	];
	var startEditing=false;
	$scope.btnLabel = 'Включить редактор маршрута';
	$scope.SaveRoute= function()
				{
					$http.post('/Routes/create', {
													title:$scope.routeTitle,
													description:$scope.routeDescription,
													waypoints:routePoints
												}).
					  success(function(data, status, headers, config) {
						alert('Route created!');
					  }).
					  error(function(data, status, headers, config) {
						alert('Error!');
					  });
				};
	$scope.route = function(map){
		$scope.routeEdit = function()
		{
			if (!startEditing) {
						// Включаем редактор.
						startEditing=!startEditing;						
						$scope.btnLabel = 'Отключить редактор маршрута';
					} else {
						// Выключаем редактор.
						startEditing=!startEditing;						
						$scope.btnLabel='Включить редактор маршрута';
					}			
		};
		 
		 var addRoutePoint=function(e)
		{
			if(startEditing)
			{
				routePoints.push(e.get('coords'));
				if(routePoints.length>1) 
				{
					if(_route) map.geoObjects.remove(_route);
					ymaps.route(routePoints, {	mapStateAutoApply: true	})
											  .then(function (route) {_route=route;map.geoObjects.add(route);});
				}
				else 
				{
					var mark=new ymaps.GeoObject({
						geometry:   {
										type: "Point",
										coordinates: e.get('coords')
									},
                        properties: {
										iconContent: '1'
									}
					});
				map.geoObjects.add(mark);
				}
			};
						
		};
		map.events.add('click', addRoutePoint, this);
	};
	
	
    }]
})