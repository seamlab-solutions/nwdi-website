$(document).ready(function() {
    $(".content").load('online-result.html');
    
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
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics',
						'4D Ultrasound'
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'BONE DENSITOMETRY',
				],
				[
					'PULMONARY FUNCTION TEST',
				],
				[
					'DUPLEX SCAN',
					[
						'Arterial',
						'Carotid',
						'Renal',
						'Venous'
					]
				],
				[
					'STRESS TEST',
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'G/F Philippines College of Surgeons Bldg. 992 EDSA, Quezon City', 
			telephone: '(02)426 7887',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics'
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'Unit 5 Olympia Commercial Plaza, 131 Quirino Highway Baesa, Quezon City', 
			telephone: '(02)330 0258 ',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics'
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: '188 General Luis St. Brgy. Nagkaisang-Nayon Novaliches, Quezon City ', 
			telephone: '(02)790 8855',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics'
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'Unit 12 Ponciana Center McArthur Highway cor. Del Monte Ave. Potrero, Malabon', 
			telephone: '(02)330 9245 ',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics'
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'Units 229-231 Dasmariñas St. Binondo, Manila', 
			telephone: '(02)242 0641 ',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics',
						'4D Ultrasound'
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'BONE DENSITOMETRY',
				],
				[
					'PULMONARY FUNCTION TEST',
				],
				[
					'DUPLEX SCAN',
					[
						'Arterial',
						'Carotid',
						'Renal',
						'Venous'
					]
				],
				[
					'STRESS TEST',
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'Mirasol Bldg., Apacible St. cor. Taft Ave. Manila', 
			telephone: '(02)521-0320 / 790-8860',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics'
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'Rm. 104 Campos Rueda Bldg., 101 Urban Ave. San Lorenzo, Makati', 
			telephone: '(02)887 5498 ',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics',
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Analog'
					]
				],
				[
					'DRUG TEST',
				],
				
				[
					'DUPLEX SCAN',
					[
						'Arterial',
						'Venous'
					]
				],
				[
					'STRESS TEST',
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'Meralco Building Ortigas, Metro Manila', 
			telephone: '(02)242 0641 ',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General'
						
					]
				],
				[
					'XRAY',
					[
						'Digital'
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				[
					'MAMOGRAPHY',
					[
						'Digital'
					]
				],
				[
					'PULMONARY FUNCTION TEST',
				],
				[
					'DUPLEX SCAN',
					[
						'Arterial',
						'Carotid',
						'Renal',
						'Venous'
					]
				],
				[
					'CT SCAN',
				],
				[
					'STRESS TEST',
				],
				[
					'HOME SERVICE',
				],
				[
					'EXECUTIVE CHECK UP',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		},
		{ 
			address: 'Imperial Appliance Plaza Brgy. Talon Uno Alabang-Zapote Road Las Piñas', 
			telephone: '(02)790 8890  ',
			services: [
				[
					'COMPLETE LABORATORY TESTS'
				],
				[
					'ULTRASOUND',
					[
						'General',
						'Obstetrics',
					]
				],
				[
					'XRAY',
					[
						'Conventional Film '
					]
				],
				[
					'DIGITAL ECG',
				],
				[
					'2D ECHO',
					[
						'Plain',
						'With Doppler'
					]
				],
				
				[
					'DRUG TEST',
				],
				[
					'HOME SERVICE',
				],
				[
					'WALK-IN PRE EMPLOYMENT EXAM (PEE)',
				],
				[
					'WALK-IN ANNUAL PHYSICAL EXAM ( APE)',
				],
			
			]
		}
	]

	let selected_branch = branches[(id == null ? $(event.target).val() : id)]
	$("#address").html(selected_branch.address);
	$("#telephone").html(selected_branch.telephone);

	$("#services").empty()
	$.each(selected_branch.services, function(index, service) {
		var service_li = document.createElement("li")
		$(service_li).text(service)
        $("#services").append(service_li);
	})

	$("#branches").val((id == null ? $(event.target).val() : id))

	$(".content").on('show.bs.modal', '.result-modal', function (event) {
        var modal = $(this);
        modal.find('.modal-body button').prop('disabled', true);
        var button = $(event.relatedTarget);
        var trackno = button.data('trackno');

        $("#Result").attr("src", '/online-result/' + trackno);
        $("#Result").on("load", function () {
            modal.find('.modal-body button').prop("disabled", false);
            var count;
            for(count = 50; count < 1300; count++) {
               $('#Result').contents().find("div.base[style*='top:" + count + "px;']:has(img[src*='bmp'])").html('<img src="result_files\\check.bmp">');
            }
        });
    });
}

function validate() {
    $.post( "online-result", { patient_number: $("#patient_number").val() }, function( data ) {
        if(data.length) {
            $(".e-result").toggleClass('d-none')
            $(".e-result-list").toggleClass('d-none')
            $.each(data, function(index, row) {
                var tr = document.createElement("tr")
        
                $.each(['TransactionDate', 'ResultCategory'], function(index, column) {
                    var column_td = document.createElement("td")
                    $(column_td).text(row[column])
                    tr.append(column_td);
                })
    
                var button_td = document.createElement("td")
                var button = document.createElement("button")
    
                $(button).html('View')
                $(button).addClass("btn btn-sm btn-outline-primary")
                $(button).attr('data-trackno', row['trackno'])
                $(button).attr('data-toggle', "modal")
                $(button).attr('data-target', ".modal")
                button_td.append(button);
                $(button_td).addClass('text-right')
                tr.append(button_td);
        
                $("#patient_result").append(tr);
            })
        } else {
            alert(data.status)
        }
    });
}

function logout() {
    $(".e-result").toggleClass('d-none')
    $(".e-result-list").toggleClass('d-none')
	$("#patient_result").empty()
	$("#patient_number").val('')
	$("#transaction_number").val('')
	$("#patient_number").focus()
}