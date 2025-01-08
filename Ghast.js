ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar(Ingredient.of("#forge:ingots"))
        .mobOutput(
            SummoningOutput.mob('ghast')
        )
        .input('minecraft:bow')
        .input('16x minecraft:arrow')
        .input('16x minecraft:gunpowder')
        .input('32x minecraft:soul_sand')
        .recipeTime(200)
        .blockBelow('minecraft:furnace', { lit: true })})