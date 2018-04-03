$( document ).ready(function() {
    $(".content").load('home.html');
    
    $("nav > ul > li > a" ).on("click", function(e) {
        $("nav > ul > li > a" ).removeClass('active');
        $(e.target).toggleClass('active');
        $(".content").load($(e.target).attr('href'));
        return false;
    });
});

function show_clinic(id = null) {
	branches = [
		{ 
			address: '#250 D. Tuazon Street, Quezon City', 
			telephone: '(02) 790 8888',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'G/F Philippines College of Surgeons Bldg. 992 EDSA, Quezon City', 
			telephone: '(02)426 7887',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'Unit 5 Olympia Commercial Plaza, 131 Quirino Highway Baesa, Quezon City', 
			telephone: '(02)330 0258 ',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: '188 General Luis St. Brgy. Nagkaisang-Nayon Novaliches, Quezon City ', 
			telephone: '(02)790 8855',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'Unit 12 Ponciana Center McArthur Highway cor. Del Monte Ave. Potrero, Malabon', 
			telephone: '(02)330 9245 ',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'Units 229-231 Dasmariñas St. Binondo, Manila', 
			telephone: '(02)242 0641 ',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'Mirasol Bldg., Apacible St. cor. Taft Ave. Manila', 
			telephone: '(02)521-0320 / 790-8860',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'Rm. 104 Campos Rueda Bldg., 101 Urban Ave. San Lorenzo, Makati', 
			telephone: '(02)887 5498 ',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'Meralco Building Ortigas, Metro Manila', 
			telephone: '(02)242 0641 ',
			services: [
				'Services 1',
				'Services 2'
			]
		},
		{ 
			address: 'Imperial Appliance Plaza Brgy. Talon Uno Alabang-Zapote Road Las Piñas', 
			telephone: '(02)790 8890  ',
			services: [
				'Services 1',
				'Services 2'
			]
		}
	]
	$("#address").html(branches[(id == null ? $(event.target).val() : id)].address);
	$("#telephone").html(branches[(id == null ? $(event.target).val() : id)].telephone);
}