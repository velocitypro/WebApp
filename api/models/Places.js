/**
* Places.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	authorID		: { type: 'string' }, // ID автора

  	title			: { type: 'string' }, // Заголовок
  	description		: { type: 'JSON' },  // Описание места [ text, point {address, lon, lat} ]

  	type			: { type: 'string' }, // rent, shop, sight, repair, event

  	comments		: { type: 'JSON' },
  	likes			: { type: 'string' },
  	relatedPlaces   : { type: 'JSON' },
  	views			: { type: 'string' },

  	status			: { type: 'string' },
  	GUID			: { type: 'string' }



  }
};

