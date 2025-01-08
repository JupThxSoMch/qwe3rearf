ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar(Ingredient.of("golden_boots"))
        .mobOutput(
            SummoningOutput.mob('zombified_piglin')
            .count(3)
        )
        .input('minecraft:golden_sword')
        .input('minecraft:crossbow')
        .input('minecraft:golden_axe')
        .input('48x minecraft:rotten_flesh')
        .input('16x minecraft:leather')
        .input('16x minecraft:gold_ingot')
        .recipeTime(200)})