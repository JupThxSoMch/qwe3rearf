ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar(Ingredient.of("coal_block"))
        .mobOutput(
            SummoningOutput.mob('wither_skeleton')
        )
        .input('minecraft:stone_sword')
        .input('16x minecraft:bone')
        .input('32x minecraft:coal')
        .input('minecraft:skeleton_skull')
        .recipeTime(200)})