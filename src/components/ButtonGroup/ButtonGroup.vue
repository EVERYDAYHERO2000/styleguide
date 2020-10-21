<template>
    <div 
        class="button-group" 
        v-bind:class="[classWidth, classJoin]">
    <!-- @slot Слот для кнопок -->    
    <slot></slot>
    </div>
</template>

<script>

    /**
	 * Группа кнопок
	 * @displayName ButtonGroup
	 */
    export default {
		name: 'ButtonGroup',
		props: {
            /**
			 * Ширина кнопок
             * @values auto, flex
			 */
            buttonsWidth: {
                type: String,
				default: 'auto'
            },
            /**
             * Склеить кнопки
             */
            join: {
                 type: Boolean,
                 default: false
             }
        },
        computed: {
            classWidth() {
                let width;
                switch (this.buttonsWidth) {
                    case 'auto':
                        width = 'button-group_auto';
                        break;
                    case 'flex':
                        width = 'button-group_flex';
                        break;       
                }
                return width;
            },
            classJoin() {
                return (this.join) ? 'button-group_join' : '';
            }
        }        
    }     

</script>

<style lang="scss" scope>

	@import '../../variables/variables.scss';
    @import '../../../node_modules/primeicons/primeicons.css';   

    .button-group {
        display: flex;

        .p-button {
            margin: 0 8px;

            &:first-child {
                margin: 0 8px 0 0;
            }

            &:last-child {
                margin: 0 0 0 8px;
            }
        }

        &_flex {

            .p-button {
                flex-grow: 1;
            }

        }

        &_join {

            .p-button  {
                margin: 0;  
                border-radius: 0;  
            }
            
            .p-button.p-button-outlined:enabled, .p-button.p-button-outlined:enabled:hover {
                border-right: 0px
            }
            
            .p-button:first-child {
                margin: 0;
                border-radius: 3px 0 0 3px;
            }

            .p-button:last-child {
                margin: 0;
                border-radius: 0 3px 3px 0;
            }

            .p-button.p-button-outlined:enabled:last-child, .p-button.p-button-outlined:enabled:hover:last-child {
                border-right: 1px solid;
            }

        }
    }
	
</style>