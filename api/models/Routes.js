/**
* Routes.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	authorID		 : { type: 'string' }, // ID автора

  	title			   : { type: 'string' }, // Заголовок маршрута
  	description	 : { type: 'JSON' },	
  	// Полное описание маршрута: [ tags, text, startPointName, endPointName, distance, duration, climb, level ]

  	type			  : { type: 'string' }, // Тип маршрута (город, деревня и тд)
  	waypoints		: { type: 'JSON' }, 
    // Точки по которым строится маршрут на карте: [ startPoint {name, lon, lat}, endPoint {name, lon, lat}, waypoint1 {name, lon, lat} ]

  	comments		  : { type: 'JSON' },
  	likes			    : { type: 'string' },
  	ridesCounter  : { type: 'string' }, // Счетчик людей, которые катались по данному маршруту 
  	views			    : { type: 'string' },
  	relatedRoutes	: { type: 'JSON' }, // ID похожих маршрутов 

  	status			: { type: 'string' }, // Статус маршрута (одобрен, забанен...)
  	GUID			  : { type: 'string' } // Абсолютная ссылка на маршрут

  }
};

