// // export interface Item {
// //   id: number;
// //   name: string;
// //   type: string;
// //   subType: string;
// //   price: number;
// //   description: string;
// //   imageUrl: string;
// //   review: any;
// // }

// export interface Item {
//   id: string;
//   name: string;
//   price: number;
//   imagePath: string;
//   categoryId: string;
//   description: string;
//   ingredients: any; //List<string>
//   rateCount: number;
// }
// export interface CartItem {
//   item: Item;
//   count: number;
// }

// export const items = [
//   {
//     id: 1,
//     name: 'Mojitto',
//     type: 'drinks',
//     subType: 'cocktail',
//     price: 300,
//     description:
//       'This is an authentic recipe for mojito. I sized the recipe for one serving, but you can adjust it accordingly and make a pitcher full. ' +
//       "It's a very refreshing drink for hot summer days. Be careful when drinking it, however. If you make a pitcher you might be tempted to drink the " +
//       'whole thing yourself, and you just might find yourself talking Spanish in no time! Tonic water can be substituted instead of the soda ' +
//       'water but the taste is different and somewhat bitter.',
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHa6QMprnF-y7SD2_AZ1gtQpM1dcB7KeRJg&usqp=CAU',
//     review: 0.2,
//   },
//   {
//     id: 2,
//     name: 'Spiced Edamame',
//     type: 'food',
//     subType: 'appetizer',
//     price: 350,
//     description:
//       'Toss tender, cooked edamame pods in a homemade chili salt made using chili powder, red pepper flakes and dried oregano. ' +
//       "The spicy blend complements the beans' mildly sweet flavor.",
//     imageUrl:
//       'https://static01.nyt.com/images/2021/04/21/dining/cw-chamomile-lime-rickey/merlin_186704055_aeed04d9-4c56-4214-a5dc-4a8d3a780f51-articleLarge.jpg',
//     review: 0.1,
//   },
//   {
//     id: 3,
//     name: 'Lime Rickey',
//     type: 'drinks',
//     subType: 'Mocktail',
//     price: 400,
//     description: 'Lime Flavoured soda,fresh juice,simple syrup, and seltzer',
//     imageUrl:
//       'https://www.thespruceeats.com/thmb/iZgP0fnMBtTk5ls9004r7F1rCIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lime-rickey-908792-hero-5c25321646e0fb0001ebbbdf.jpg',
//     review: 0.2,
//   },
//   {
//     id: 4,
//     name: 'Sweet Adeline',
//     type: 'drink',
//     subType: 'Mocktail',
//     price: 300,
//     description:
//       'orange-spice black tea blend into a hot mix of pomegranate juice and cinnamon syrup.',
//     imageUrl:
//       'https://www.thespruceeats.com/thmb/tH26KI6ByF0tB0df1pBAb4r82Do=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SweetAdeline-184832349-56a173485f9b58b7d0bf638a.jpg',
//     review: 2,
//   },
//   {
//     id: 5,
//     name: 'Cuba Libre',
//     type: 'drinks',
//     subType: 'Cocktail',
//     price: 120,
//     description: 'Don Q Añejo, cola, over ice',
//     imageUrl:
//       'https://media.istockphoto.com/photos/rum-and-cola-cuba-libre-picture-id480045080?s=612x612',
//     review: 0.6,
//   },
//   {
//     id: 6,
//     name: 'Green Lizard',
//     type: 'drinks',
//     subType: 'Cocktail',
//     price: 250,
//     description:
//       'Three Olives Apple-Pear Vodka, fig liqueur, fresh lime juice, real kiwi, over ice',
//     imageUrl:
//       'https://www.mixolopedia.com/wp-content/uploads/2016/02/green_lizard_cocktail.jpg',
//     review: 0.9,
//   },
//   {
//     id: 7,
//     name: ' Leches French Toast ',
//     type: 'food',
//     subType: 'appetizer',
//     price: 300,
//     description: 'Bathed In Tres Leches Crema Topped With Fresh Berries',
//     imageUrl:
//       'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
//     review: 4.2,
//   },
//   {
//     id: 8,
//     name: 'Pork Carnitas Soft Tacos',
//     type: 'food',
//     subType: 'appetizer',
//     price: 200,
//     description:
//       'Smoked and roasted pork shoulder with guacamole, pickled red cabbage, micro cilantro',
//     imageUrl:
//       'https://static01.nyt.com/images/2015/07/06/dining/06TACOS/06TACOS-articleLarge.jpg',
//     review: 3.5,
//   },
// ];

// export const mocktailItems = [
//   {
//     id: 4,
//     name: 'Sweet Adeline',
//     price: 300,
//     description:
//       'orange-spice black tea blend into a hot mix of pomegranate juice and cinnamon syrup.',
//     imagePath:
//       'https://www.thespruceeats.com/thmb/tH26KI6ByF0tB0df1pBAb4r82Do=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SweetAdeline-184832349-56a173485f9b58b7d0bf638a.jpg',
//     categoryId: '1',
//     ingredients: 'black tea',
//     rateCount: 2,
//   },
//   {
//     id: 3,
//     name: 'Lime Rickey',
//     type: 'drinks',
//     subType: 'Mocktail',
//     price: 400,
//     description: 'Lime Flavoured soda,fresh juice,simple syrup, and seltzer',
//     imageUrl:
//       'https://www.thespruceeats.com/thmb/iZgP0fnMBtTk5ls9004r7F1rCIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lime-rickey-908792-hero-5c25321646e0fb0001ebbbdf.jpg',
//     review: 0.2,
//   },
//   {
//     id: 12,
//     name: 'Sweet Adeline',
//     type: 'drink',
//     subType: 'Mocktail',
//     price: 300,
//     description:
//       'orange-spice black tea blend into a hot mix of pomegranate juice and cinnamon syrup.',
//     imageUrl:
//       'https://www.thespruceeats.com/thmb/tH26KI6ByF0tB0df1pBAb4r82Do=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SweetAdeline-184832349-56a173485f9b58b7d0bf638a.jpg',
//     review: 2,
//   },
//   {
//     id: 11,
//     name: 'Lime Rickey',
//     type: 'drinks',
//     subType: 'Mocktail',
//     price: 400,
//     description: 'Lime Flavoured soda,fresh juice,simple syrup, and seltzer',
//     imageUrl:
//       'https://www.thespruceeats.com/thmb/iZgP0fnMBtTk5ls9004r7F1rCIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lime-rickey-908792-hero-5c25321646e0fb0001ebbbdf.jpg',
//     review: 0.2,
//   },
// ];
// export const cocktailItems = [
//   {
//     id: 1,
//     name: 'Mojitto',
//     type: 'drinks',
//     subType: '',
//     price: 300,
//     description:
//       'This is an authentic recipe for mojito. I sized the recipe for one serving, but you can adjust it accordingly and make a pitcher full. ' +
//       "It's a very refreshing drink for hot summer days. Be careful when drinking it, however. If you make a pitcher you might be tempted to drink the " +
//       'whole thing yourself, and you just might find yourself talking Spanish in no time! Tonic water can be substituted instead of the soda ' +
//       'water but the taste is different and somewhat bitter.',
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHa6QMprnF-y7SD2_AZ1gtQpM1dcB7KeRJg&usqp=CAU',
//     review: 0.2,
//   },
//   {
//     id: 5,
//     name: 'Cuba Libre',
//     type: 'drinks',
//     subType: 'Cocktail',
//     price: 120,
//     description: 'Don Q Añejo, cola, over ice',
//     imageUrl:
//       'https://media.istockphoto.com/photos/rum-and-cola-cuba-libre-picture-id480045080?s=612x612',
//     review: 0.6,
//   },
//   {
//     id: 1,
//     name: 'Mojitto',
//     type: 'drinks',
//     subType: '',
//     price: 300,
//     description:
//       'This is an authentic recipe for mojito. I sized the recipe for one serving, but you can adjust it accordingly and make a pitcher full. ' +
//       "It's a very refreshing drink for hot summer days. Be careful when drinking it, however. If you make a pitcher you might be tempted to drink the " +
//       'whole thing yourself, and you just might find yourself talking Spanish in no time! Tonic water can be substituted instead of the soda ' +
//       'water but the taste is different and somewhat bitter.',
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHa6QMprnF-y7SD2_AZ1gtQpM1dcB7KeRJg&usqp=CAU',
//     review: 0.2,
//   },
//   {
//     id: 5,
//     name: 'Cuba Libre',
//     type: 'drinks',
//     subType: 'Cocktail',
//     price: 120,
//     description: 'Don Q Añejo, cola, over ice',
//     imageUrl:
//       'https://media.istockphoto.com/photos/rum-and-cola-cuba-libre-picture-id480045080?s=612x612',
//     review: 0.6,
//   },
// ];
// export const appetizerItems = [
//   {
//     id: 7,
//     name: ' Leches French Toast ',
//     type: 'food',
//     subType: 'appetizer',
//     price: 300,
//     description: 'Bathed In Tres Leches Crema Topped With Fresh Berries',
//     imageUrl:
//       'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
//     review: 4.2,
//   },
//   {
//     id: 8,
//     name: 'Pork Carnitas Soft Tacos',
//     type: 'food',
//     subType: 'appetizer',
//     price: 200,
//     description:
//       'Smoked and roasted pork shoulder with guacamole, pickled red cabbage, micro cilantro',
//     imageUrl:
//       'https://static01.nyt.com/images/2015/07/06/dining/06TACOS/06TACOS-articleLarge.jpg',
//     review: 3.5,
//   },
//   {
//     id: 7,
//     name: ' Leches French Toast ',
//     type: 'food',
//     subType: 'appetizer',
//     price: 300,
//     description: 'Bathed In Tres Leches Crema Topped With Fresh Berries',
//     imageUrl:
//       'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
//     review: 4.2,
//   },
//   {
//     id: 8,
//     name: 'Pork Carnitas Soft Tacos',
//     type: 'food',
//     subType: 'appetizer',
//     price: 200,
//     description:
//       'Smoked and roasted pork shoulder with guacamole, pickled red cabbage, micro cilantro',
//     imageUrl:
//       'https://static01.nyt.com/images/2015/07/06/dining/06TACOS/06TACOS-articleLarge.jpg',
//     review: 3.5,
//   },
// ];
