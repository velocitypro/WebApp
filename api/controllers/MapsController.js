/**
 * MapsController
 *
 * @description :: Server-side logic for managing Maps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
                res.view('maps', {
                    title: "Карта"
                });
            }
};

