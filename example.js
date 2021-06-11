let things = ['broom', 'hat', 'shovel' ,'RGB ram']

for (let i = 0; i < 12; i ++){
    console.log(things[i % things.length])
}