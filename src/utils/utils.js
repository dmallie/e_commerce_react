
export const FormatPrice = ( price ) => {
       // convert string to number
       const formattedPrice = Number( price );
       // convert number to float dividing by 100 
       return (parseFloat(formattedPrice / 100, 10));
};

export const UniqueValues = ( collection_object, searchType ) => {
       // initialize empty arrays
       const whole_array = [];
       // const unique_values = [];

       // loop through collection objects and populate whole_array
       collection_object.map(item => {
              if(searchType === 'colors') {
                     item[searchType].map(color => {
                            return(
                                   whole_array.push(color)
                            )
                     }) 
              }else{
                     whole_array.push(item[searchType]);
              }
       })
       // select only unique values from whole_array
       const unique_values = ['all', ... new Set(whole_array)];
       // console.log('unique_values: ', unique_values)
       return unique_values;
};

export const Min_max_prices = (objects) => {
       // create an empty array
       const values = [];
       // loop through objects
       objects.map(object => {
              // pick prices and format it
              const price = FormatPrice(object.price);
              // store the price in the array
              return(

                     values.push(price)
              )
       });
       // extract the min and max prices
       const minPrice = Math.min.apply(Math, values);
       const maxPrice = Math.max.apply(Math, values);
       // console.log('minPrice: ', minPrice);
       return [minPrice, maxPrice];
}