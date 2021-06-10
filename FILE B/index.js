    let dlg = "The time is not right"
    let myArray = [
  {
    Name: "Jill",
    FavoriteFridge1: "GOOD_SHEPHERD_HOSPITAL",
    Items: "Salad 1",
    Cost: "8",
    FavoriteFridge2: "MKE_SHOPS_GRAND_AVE"
  },
  {
    Name: "Danielle",
    FavoriteFridge1: "FEINBERG",
    Items: "Salad 2",
    Cost: "8",
    FavoriteFridge2: "ELMHURST_LIBRARY"
  },
  {
    Name: "Elena",
    FavoriteFridge1: "ELMHURST_LIBRARY",
    Items: "Salad4",
    Cost: "8",
    FavoriteFridge2: "MKE_330_E_KILBOURN"
  },
  {
    Name: "Andrew",
    FavoriteFridge1: "ELMHURST_FRICK",
    Items: "Salad6",
    Cost: "8",
    FavoriteFridge2: "600_W_FULTON"
  },
  {
    Name: "Jawairia",
    FavoriteFridge1: "DEPAUL_LIBRARY",
    Items: "Bowl 1",
    Cost: "6.5",
    FavoriteFridge2: "MKE_AURORA_ST_LUKE_HOSPITAL"
  },
  {
    Name: "Jess",
    FavoriteFridge1: "CITY_HALL",
    Items: "Bowl 5",
    Cost: "8.5",
    FavoriteFridge2: "200_N_LASALLE"
  },
  {
    Name: "Candice",
    FavoriteFridge1: "CHICAGO_PREMIUM_OUTLETS",
    Items: "Salad 3",
    Cost: "8",
    FavoriteFridge2: "ARLINGTON_HEIGHTS_MEMORIAL_LIBRARY"
  },
  {
    Name: "Mike",
    FavoriteFridge1: "BOEING_BUILDING",
    Items: "Bowl 1",
    Cost: "6.5",
    FavoriteFridge2: "TRUNK_CLUB"
  },
  {
    Name: "Itoji",
    FavoriteFridge1: "303_E_WACKER",
    Items: "Snack 3",
    Cost: "3.5",
    FavoriteFridge2: "108_N_STATE"
  },
  {
    Name: "Aaron",
    FavoriteFridge1: "200_N_LASALLE",
    Items: "Snack 3",
    Cost: "3.5",
    FavoriteFridge2: "111_N_CANAL"
  },
  {
    Name: "Kathe",
    FavoriteFridge1: "1_N_FRANKLIN",
    Items: "Snack 2",
    Cost: "4.5",
    FavoriteFridge2: "541_N_FAIRBANKS"
  },
  {
    Name: "Alycia",
    FavoriteFridge1: "180_N_LASALLE",
    Items: "Protein 1 ",
    Cost: "2.5",
    FavoriteFridge2: "BLACKHAWK"
  },
  {
    Name: "Jacqui",
    FavoriteFridge1: "150_N_RIVERSIDE",
    Items: "Snack 2",
    Cost: "4.5",
    FavoriteFridge2: "FEINBERG"
  },
  {
    Name: "Jason",
    FavoriteFridge1: "1245_DIEHL_ROAD",
    Items: "Protein 2",
    Cost: "1.5",
    FavoriteFridge2: "GROUPON_2"
  },
  {
    Name: "Jill",
    FavoriteFridge1: "GOOD_SHEPHERD_HOSPITAL",
    Items: "Salad 2",
    Cost: "8",
    FavoriteFridge2: "PRENTICE"
  },
  {
    Name: "Danielle",
    FavoriteFridge1: "FEINBERG",
    Items: "Protein 1 ",
    Cost: "2.5",
    FavoriteFridge2: "222_S_RIVERSIDE"
  },
  {
    Name: "Elena",
    FavoriteFridge1: "ELMHURST_LIBRARY",
    Items: "Salad 3",
    Cost: "8",
    FavoriteFridge2: "1000_W_FULTON"
  },
  {
    Name: "Andrew",
    FavoriteFridge1: "ELMHURST_FRICK",
    Items: "Sandwich 1",
    Cost: "",
    FavoriteFridge2: "GLENBROOK_HOSPITAL"
  },
  {
    Name: "Jawairia",
    FavoriteFridge1: "DEPAUL_LIBRARY",
    Items: "Sandwich 3",
    Cost: "",
    FavoriteFridge2: "MERCH_MART_1"
  },
  {
    Name: "Jess",
    FavoriteFridge1: "CITY_HALL",
    Items: "Salad 2",
    Cost: "8",
    FavoriteFridge2: "MERCH_MART_2"
  },
  {
    Name: "Candice",
    FavoriteFridge1: "CHICAGO_PREMIUM_OUTLETS",
    Items: "Snack 3",
    Cost: "4.5",
    FavoriteFridge2: "ALLSTATE_2"
  },
  {
    Name: "Mike",
    FavoriteFridge1: "BOEING_BUILDING",
    Items: "Protein 3",
    Cost: "1.5",
    FavoriteFridge2: "KEMPER_LAKES_CENTER"
  },
  {
    Name: "Itoji",
    FavoriteFridge1: "303_E_WACKER",
    Items: "Salad 3",
    Cost: "8",
    FavoriteFridge2: "WOODFIELD_CORP_CENTER"
  },
  {
    Name: "Aaron",
    FavoriteFridge1: "200_N_LASALLE",
    Items: "Snack 3",
    Cost: "3.5",
    FavoriteFridge2: "RUSH_HOSPITAL_CAFE"
  },
  {
    Name: "Kathe",
    FavoriteFridge1: "1_N_FRANKLIN",
    Items: "Salad 1",
    Cost: "8",
    FavoriteFridge2: "AA_LOUNGE_ORD"
  },
  {
    Name: "Alycia",
    FavoriteFridge1: "180_N_LASALLE",
    Items: "Salad 2",
    Cost: "8",
    FavoriteFridge2: "700_COMMERCE"
  },
  {
    Name: "Jacqui",
    FavoriteFridge1: "150_N_RIVERSIDE",
    Items: "Salad4",
    Cost: "8",
    FavoriteFridge2: "OHARE_PLAZA"
  },
  {
    Name: "Jason",
    FavoriteFridge1: "1245_DIEHL_ROAD",
    Items: "Salad6",
    Cost: "8",
    FavoriteFridge2: "225_W_WACKER"
  },
  {
    Name: "Jill",
    FavoriteFridge1: "GOOD_SHEPHERD_HOSPITAL",
    Items: "Bowl 1",
    Cost: "7.5",
    FavoriteFridge2: "KEMPER_LAKES_BUILDING_1"
  },
  {
    Name: "Danielle",
    FavoriteFridge1: "FEINBERG",
    Items: "Bowl 5",
    Cost: "9.5",
    FavoriteFridge2: "640_N_LASALLE"
  },
  {
    Name: "Elena",
    FavoriteFridge1: "ELMHURST_LIBRARY",
    Items: "Salad 3",
    Cost: "8",
    FavoriteFridge2: "3040_SALT_CREEK_LANE"
  },
  {
    Name: "Andrew",
    FavoriteFridge1: "ELMHURST_FRICK",
    Items: "Bowl 1",
    Cost: "6.5",
    FavoriteFridge2: "69_W_WASHINGTON_PEDWAY"
  },
  {
    Name: "Jawairia",
    FavoriteFridge1: "DEPAUL_LIBRARY",
    Items: "Snack 3",
    Cost: "2.5",
    FavoriteFridge2: "69_W_WASHINGTON_TENANT_LOUNGE"
  },
  {
    Name: "Jess",
    FavoriteFridge1: "CITY_HALL",
    Items: "Snack 3",
    Cost: "2.5",
    FavoriteFridge2: "REDWOOD_LOGISTICS"
  },
  {
    Name: "Candice",
    FavoriteFridge1: "CHICAGO_PREMIUM_OUTLETS",
    Items: "Snack 2",
    Cost: "4.5",
    FavoriteFridge2: "RUSH_HOSPITAL_1750_HARRISON"
  },
  {
    Name: "Mike",
    FavoriteFridge1: "BOEING_BUILDING",
    Items: "Protein 1 ",
    Cost: "2.5",
    FavoriteFridge2: "LITTLE_COMPANY_MARY_HOSPITAL"
  },
  {
    Name: "Itoji",
    FavoriteFridge1: "303_E_WACKER",
    Items: "Snack 2",
    Cost: "3.5",
    FavoriteFridge2: "CHICAGO_STATE_UNIVERSITY"
  },
  {
    Name: "Aaron",
    FavoriteFridge1: "200_N_LASALLE",
    Items: "Protein 2",
    Cost: "2.5",
    FavoriteFridge2: "ONE_LINCOLN_CENTRE"
  },
  {
    Name: "kathe",
    FavoriteFridge1: "1_N_FRANKLIN",
    Items: "Salad 2",
    Cost: "8",
    FavoriteFridge2: "320_W_OHIO"
  },
  {
    Name: "Alycia",
    FavoriteFridge1: "180_N_LASALLE",
    Items: "Protein 4",
    Cost: "1.5",
    FavoriteFridge2: "ECHO_LOGISTICS"
  },
  {
    Name: "Jacqui",
    FavoriteFridge1: "150_N_RIVERSIDE",
    Items: "Salad 3",
    Cost: "8",
    FavoriteFridge2: "RUSH_OFFICE"
  },
  {
    Name: "Jason",
    FavoriteFridge1: "1245_DIEHL_ROAD",
    Items: "Sandwich 1",
    Cost: "",
    FavoriteFridge2: "1340_S_DAMEN"
  },
  {
    Name: "Jill",
    FavoriteFridge1: "GOOD_SHEPHERD_HOSPITAL",
    Items: "Sandwich 3",
    Cost: "",
    FavoriteFridge2: "400_SKOKIE_BLVD"
  },
  {
    Name: "Danielle",
    FavoriteFridge1: "FEINBERG",
    Items: "Salad 2",
    Cost: "8",
    FavoriteFridge2: "LURIE_CHILDRENS_OUTPATIENT_CENTER"
  },
  {
    Name: "Elena",
    FavoriteFridge1: "ELMHURST_LIBRARY",
    Items: "Snack 3",
    Cost: "3.5",
    FavoriteFridge2: "121_W_WACKER"
  },
  {
    Name: "Andrew",
    FavoriteFridge1: "ELMHURST_FRICK",
    Items: "Protein 2",
    Cost: "2.5",
    FavoriteFridge2: "125_S_CLARK"
  },
  {
    Name: "Jawairia",
    FavoriteFridge1: "DEPAUL_LIBRARY",
    Items: "Salad 3",
    Cost: "8",
    FavoriteFridge2: "200_W_JACKSON"
  },
  {
    Name: "Jess",
    FavoriteFridge1: "CITY_HALL",
    Items: "Snack 3",
    Cost: "2.5",
    FavoriteFridge2: "NORTHSHORE"
  },
  {
    Name: "Candice",
    FavoriteFridge1: "CHICAGO_PREMIUM_OUTLETS",
    Items: "Bowl 3",
    Cost: "6.5",
    FavoriteFridge2: "LAKE_POINT_TOWER"
  },
]
	$('th').on('click', function(){
        let column = $(this).data('column')
        let order = $(this).data('order')
        let text = $(this).html()
        text = text.substring(0, text.length -1)

        if(order == 'desc'){
            $(this).data('order', 'asc')
            myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1) 
            text += `&#9660`
        }else{
            $(this).data('order', 'desc')
            myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1) 
            text += `&#9650`
        }
        $(this).html(text)
        buildTable(myArray)

    })
    
    $(`#search-input`).on('keyup', function(){
        let value = $(this).val()
        console.log('Value:', value)
        let data = searchTable(value, myArray)
        buildTable(data)
    })

    buildTable(myArray)

    function searchTable(value, data){
        let filteredData = []

        for (let i = 0; i < data.length; i++){
            value = value.toLowerCase()
            let name = data[i].name.toLowerCase()

            if (name.includes(value)){
                filteredData.push(data[i])
            }
        }
        return filteredData
    }

	function buildTable(data){
		let table = document.getElementById('myTable')
        table.innerHTML = ''
		for (let i = 0; i < data.length; i++){
			let row = `<tr>
							<td>${data[i].Name}</td>
							<td>${data[i].FavoriteFridge2}</td>
							</tr>`
			table.innerHTML += row
		}
	}
  // let eta_ms = new Date(2019, 1, 12, 11, 0).getTime() - Date.now();
  // let timeout = setTimeout(buildTable(),{}, eta_ms);
  // function test(){}


