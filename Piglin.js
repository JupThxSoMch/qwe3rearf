ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar(Ingredient.of("golden_boots"))
        .mobOutput(
            SummoningOutput.mob('piglin')
            .count(3)
        )
        .input('minecraft:golden_sword')
        .input('32x minecraft:rotten_flesh')
        .input('32x minecraft:porkchop')
        .input('16x minecraft:leather')
        .input('16x minecraft:gold_ingot')
        .recipeTime(200)})