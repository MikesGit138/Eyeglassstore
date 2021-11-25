let app = angular.module('myApp',[]);
app.controller('MainController', ['$scope', function($scope) { 
    $scope.carts = [];
    $scope.products = [
        { 
          brand: 'Vincent Chase', 
          lens: 'Single vision lenses',
          frame: 'full-frame',
          price: 19, 
          cover: 'https://rukminim1.flixcart.com/image/714/857/keykscw0/frame/3/c/n/51-138004-vincent-chase-original-imafvg7e8kg7bjqk.jpeg?q=50', 
        }, 
        { 
          brand: 'John Jacobs', 
          lens: 'Bifocal lenses',
          frame: 'semi-rimless',
          price: 24, 
          cover: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/e5ff1c81de094232a80c987c02daa550_Large.jpg', 
        },
        {
          brand: 'Tommy Hilfiger', 
          lens: 'Trifocal Lenses',
          frame: 'rimless',
          price: 24, 
          cover: 'https://assets3.razerzone.com/ES_2gVeggrU0W4RjaWkowY1jhjU=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh24%2Fh44%2F9151222939678%2Frazeer-anzu-sq-500x500-sm.png', 
        },
        {
          brand: 'Ray Ban', 
          lens: 'Bifocal lenses',
          frame: 'semi-rimless',
          price: 21.75, 
          cover: 'https://images.ray-ban.com/is/image/RayBan/805289270102__002.png?impolicy=RB_RB_FBShare', 
        },
        {
          brand: 'Oxydo', 
          lens: 'Progressive lenses',
          frame: 'semi-rimless',
          price: 26, 
          cover: 'https://ae01.alicdn.com/kf/HTB1xtSdQFXXXXbEXVXXq6xXFXXX1/Colorful-Fashion-Glasses-Slim-Frame-Eyeglasses-Frame-Optical-Glasses-Spectacles-2212-Prescription-Eyewear-with-8-Optional.jpg_640x640.jpg', 
        },
        {
          brand: 'Boss Orange', 
          lens: 'Toric Lenses',
          frame: 'semi-rimless',
          price: 34.5, 
          cover: 'https://www.chanel.com/images/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_1920/pantos-eyeglasses-dark-tortoise-acetate-acetate-packshot-default-a75216x08101v3714-8824925650974.jpg', 
        },
        {
          brand: 'John Jacobs', 
          lens: 'Bifocal lenses',
          frame: 'full-frame',
          price: 28, 
          cover: 'https://cdn.eyeglasses39.net/img/general/skyscraper/eyeglasses-metal-frame.png', 
        },
        {
          brand: 'John Jacobs', 
          lens: 'Bifocal lenses',
          frame: 'semi-rimless',
          price: 24, 
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_p6DwtLSu8_73xEfdsIAGMY_9tdyigDpbvg&usqp=CAU', 
        },
        {
          brand: 'Ray Ban', 
          lens: 'Bifocal lenses',
          frame: 'rimless',
          price: 13, 
          cover: 'https://assets.lenscrafters.com/is/image/LensCrafters/8053672767896__001.png?impolicy=LC_grey&width=1024', 
        },
        {
          brand: 'Oxydo', 
          lens: 'Trifocal lenses',
          frame: 'semi-rimless',
          price: 24, 
          cover: 'https://cdn.shopify.com/s/files/1/0192/9606/files/opticals_370x230@2x.jpg?v=1609966135', 
        },
        {
          brand: 'Boss Orange', 
          lens: 'Single vision lenses',
          frame: 'semi-rimless',
          price: 29.5, 
          cover: 'https://assets.vogue-eyewear.com/is/image/Vogue/8056597523813__001.png?impolicy=HB_parameters_transp&sclw=0.25&sclh=0.25', 
        },
        {
          brand: 'John Jacobs', 
          lens: 'Bifocal lenses',
          frame: 'full-frame',
          price: 24, 
          cover: 'https://assets.glasses.com/is/image/Glasses/725125374866__STD__shad__fr.png?impolicy=GL_parameters_transp&width=700', 
        }

    ]
      $scope.add_cart = function(product){
        if(product){
          $scope.carts.push({
            brand: product.brand,
            lens: product.lens,
            frame: product.frame,
            price: product.price,
            cover: product.cover,
          })
        }
      }
      $scope.total = 0; //display the default value of total
 
				$scope.setTotals = function(cart){ //set a function name setTotals 
					if(cart){ //check if cart is already set in the function
						$scope.total += cart.price; //sum the total value of each product
					}
				}
 
				$scope.remove_cart = function(cart){ //set a function called remove_cart
					if(cart){ //checked if the cart has a value
						$scope.carts.splice($scope.carts.indexOf(cart), 1); //delete a product based on the index 
						$scope.total -= cart.price; //deduct the price of the product  simultaneously when deleted
					}
				}
  }]);
  
