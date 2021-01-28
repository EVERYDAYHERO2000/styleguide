<template>
    <div v-if="isLabel" class="input">
        <span class="p-float-label">
            <PrimeInputText v-bind:id="elementId" v-bind:class="[classSize]" type="text" v-bind:modelValue="val" v-model="val" v-on:update:modelValue="updateValue" />
            <label v-bind:for="elementId">{{label}}</label>
        </span>
    </div>
    <div v-else class="input">
         <PrimeInputText v-bind:id="elementId" type="text" v-bind:class="[classSize]" v-bind:modelValue="val" v-model="val" v-on:update:modelValue="updateValue" />
    </div>
</template>

<script>

    import {PrimeInputText} from '../../prime';

    import '../../variables/variables.scss';

    /**
	 * Полее ввода текста
	 * @displayName InputText
	 */
	export default {
        name: 'InputText',
        components: {
            PrimeInputText
        }, 
        data () {
            return {
                val: this.value,
            }
        },   
        methods: {
            updateValue: function (value) {
                this.val = value;
                this.$emit('update', value);
            }
        },
		props: {
            /**
			 * Лейбл, название текстового поля
			 */
			label: {
				type: String,
				default: ''
			},
			/**
			 * Размер
             * @values s, m, l
			 */
			size: {
				type: String,
				default: 'm'
			},
			/**
			 * Уникальный идентификатор
			 */
			id: {
				type: String,
				default: ''
            },
            /**
			 * Значение
			 */
			value: {
				type: String,
				default: ''
            },
		},
		computed: {
            isLabel() {
                return (this.label.length) ? true : false;
            },
            elementId() {
                return (this.id.length) ? this.id : `id_${this._uid}`
            },
			classSize() {
                let size;
                switch (this.size) {
                    case 's':
                        size = 'p-inputtext-sm';
                        break;
                    case 'l':
                        size = 'p-inputtext-lg';
                        break;    
                    case 'm':
                        size = '';
                        break;    
                }
                return size;
            },
        },
    
    }        
    
</script>

<style lang="scss" scope>

	@import '../../variables/variables.scss';
    @import '../../../node_modules/primeicons/primeicons.css';

    .input {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
	
</style>