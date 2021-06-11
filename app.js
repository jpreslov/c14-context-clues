// document.addEventListener('DOMContentLoaded', {

// })

var friends = ['Billy Bob Thornton', 'Lena Dunham', 'Dane Cook', 'Ron Paul', 'Jesz'];
var locations = ['the beach', 'the Grand Canyon' , 'Innovation Depot', 'the gas station across the strte from I.D.', `Sam Bonner's residence`,
'the cabin in the woods', `SlapChop Vince's house`, 'the bathroom at the Plaza', 'Saturn Birmingham', 'the Sewers of Rio de Janeiro'];
var weapons = ['a baseball bat', 'a vase', 'a Red Rider BB-gun', 'a hammer', 'the National Treauseu', 'cheese', 'a t-bone steak', 
        'a Derby hat', 'the toothpick', 'Tool album artwork', 'a DualShock 4 controller', 'Super Male Vitality', 'the Damn Son reverb', 'Billy Mays yelling',
        'a ShamWow', 'a SlapChop', 'The Snuggie', 'a Sunsetter Retractable Awning', 'THE Chia Pet', 'Wacky Waving ARm Flaigling INlflal Tube mAN'];

//specify index of 0 to not get an array back
var accContainer = document.getElementsByClassName('acc-container')[0];

for (i = 1; i <= 100; i++) {
  var h3 = document.createElement('h3');
  h3.classList.add('acc-h3');
  h3.innerText = `Accusation ${i}`;
  accContainer.append(h3);

  h3.addEventListener('click', clickHandler(i));
}

//  passing in i below allows us to get different values for i as
//  opposed to i always being 100
function clickHandler(i) {
  return function () {
    alert(`Accusation ${i}: I accuse ${friends[i % friends.length]} at ${locations[i % locations.length]} with ${weapons[i % weapons.length]}`);
  };
}
