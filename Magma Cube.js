ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar(Ingredient.of("slime_block"))
        .mobOutput(
            SummoningOutput.mob('magma_cube')
            .count(4)
        )
        .input('10x minecraft:blaze_powder')
        .input('18x minecraft:slime_ball')
        .input('64x minecraft:basalt')
        .input('64x minecraft:blackstone')
        .recipeTime(200)
        .blockBelow('minecraft:furnace', { lit: true })})