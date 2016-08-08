(function ($) {

	var thumbs = [
		{ photo: "temp/img_work_1.jpg", title: "Hareiat", description: "Quit dating, get married", href: "http://www.hareiat.com/" },
		{ photo: "temp/img_work_2.jpg", title: "Knozen", description: "Personality Quiz", href: "https://www.knozen.com/" },
		{ photo: "temp/img_work_3.jpg", title: "Select Funding", description: "Choose growth. Select funding", href: "https://www.selectfunding.com/" },
		{ photo: "temp/img_work_4.jpg", title: "Women's College Coalition", description: "Find a women’s college that's right for you!", href: "http://www.womenscolleges.org/" },
		{ photo: "temp/img_work_5.jpg", title: "MLaccessories", description: "ML Accessories has since established itself as one of the UK's", href: "https://www.mlaccessories.co.uk/" },
		{ photo: "temp/img_work_6.jpg", title: "Emmy", description: "Television Academy", href: "http://www.emmys.com/" },
		{ photo: "temp/img_work_7.jpg", title: "Enfamil", description: "Enfamil Family Begginings", href: "http://www.enfamil.com/" },
		{ photo: "temp/img_work_8.jpg", title: "Dolomiti Bikes", description: "Electric Bike Melbourne", href: "http://www.dolomitiebikes.com.au/" },
		{ photo: "temp/img_work_9.jpg", title: "Procentive", description: "Services and Interactions", href: "https://procentive.com/" },
		{ photo: "temp/img_work_10.jpg", title: "RM", description: " ", href: "#" },
		{ photo: "temp/img_work_11.jpg", title: "Fishfeed", description: "Feed for your fish", href: "#" },
		{ photo: "temp/img_work_12.jpg", title: "Sportsbook", description: "Online Sports Betting and Kentucky Derby Odds", href: "#" }
	];

	var Thumb = Backbone.Model.extend ({
		defaults: {
			icon: "glyphicon glyphicon-globe"
		}
	});

	var Directory = Backbone.Collection.extend ({
		model: Thumb
	});

	var ThumbView = Backbone.View.extend ({
		className: "col-md-3 col-sm-4 col-xs-12 illustration",
		template: $("#thumb-template").html(),

		render: function () {
			var Template = _.template(this.template);

			$(this.el).html( Template(this.model.toJSON()) );
			return this;
		}
	});

	var DirectoryView = Backbone.View.extend ({
		el: $("#portfolio"),

		initialize: function () {
			this.collection = new Directory(thumbs);
			this.render();
		},

		render: function () {
			var Item = this;
			_.each(this.collection.models, function (item) {
					Item.renderThumb(item);
			}, this);
		},

		renderThumb: function (item) {
			var thumbView = new ThumbView ({
				model: item
			});
			this.$el.append( thumbView.render().el );
		}
	});

	var directory = new DirectoryView();

} (jQuery));