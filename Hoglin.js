ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar(Ingredient.of("bone"))
        .mobOutput(
            SummoningOutput.mob('hoglin')
        )
        .input('32x minecraft:porkchop')
        .input('32x minecraft:cooked_porkchop')
        .input('16x minecraft:rotten_flesh')
        .input('8x minecraft:crimson_fungus')
        .input('4x minecraft:crimson_roots')
        .recipeTime(200)
        .blockBelow('minecraft:furnace', { lit: true })})