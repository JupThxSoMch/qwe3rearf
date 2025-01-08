ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar(Ingredient.of("golden_axe"))
        .mobOutput(
            SummoningOutput.mob('piglin_brute')
        )
        .input('minecraft:golden_apple')
        .input('32x minecraft:rotten_flesh')
        .input('32x minecraft:porkchop')
        .input('16x minecraft:leather')
        .input('32x minecraft:gold_ingot')
        .recipeTime(200)})