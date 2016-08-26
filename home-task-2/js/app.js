$(function () {
	window.app = {};

	app.formsView = Backbone.View.extend({
		el: $('#wrapper'),

		events: {
			"click .apply-color": "applyStyles",
			"click .reset": "resetStyles"
		},

		initialize: function () {
			this.render();
		},

		render: function () {
			var Template = _.template( $('#input-template').html() );
			this.$el.html(Template);
		},

		applyStyles: function () {
			var color1 = $('#val-fill-1').val();
			var border1 = $('#val-stroke-1').val();
			var borderWidth1 = $('#val-stroke-width-1').val();
			var color2 = $('#val-fill-2').val();
			var border2 = $('#val-stroke-2').val();
			var borderWidth2 = $('#val-stroke-width-2').val();
			var color3 = $('#val-fill-3').val();
			var border3 = $('#val-stroke-3').val();
			var borderWidth3 = $('#val-stroke-width-3').val();
			$('#figure-1').attr({
				"fill": color1,
				"stroke": border1,
				"stroke-width": borderWidth1
			});
			$('#figure-2').attr({
				"fill": color2,
				"stroke": border2,
				"stroke-width": borderWidth2
			});
			$('#figure-3').attr({
				"fill": color3,
				"stroke": border3,
				"stroke-width": borderWidth3
			});
			template = _.template($("#output-template").html());
			this.$el.html(template);
		},

		resetStyles: function () {
			$('#figure-1, #figure-2, #figure-3').attr({
				"fill": "#fff",
				"stroke": '#6cb835',
				"stroke-width": 2
			});
			template = _.template($("#input-template").html());
			this.$el.html(template);
		}

	});
	
	new app.formsView();

});