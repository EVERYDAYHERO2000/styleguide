<template>
    <PrimeCard>
        <template slot="header">
            <!-- @slot Слот для шапки карточки --> 
            <slot name="header" />
        </template>
        <template slot="title">
            <!-- @slot Слот для заголовка --> 
            <slot name="title" />
        </template>
        <template slot="content">
            <!-- @slot Слот для содержимого --> 
            <slot name="content" />
        </template>
        <template slot="footer">
            <!-- @slot Слот для кнопок --> 
            <slot name="footer" />
        </template>
    </PrimeCard>    
</template>

<script>
    import {PrimeCard} from '../../prime';

    import '../../variables/variables.scss';

    /**
	 * Карточка
	 * @displayName Card
	 */
	export default {
		name: 'Card',
		props: {

        }
    }        
    
</script>

<style lang="scss" scope>

	@import '../../variables/variables.scss';
    @import '../../../node_modules/primeicons/primeicons.css';
	
</style>