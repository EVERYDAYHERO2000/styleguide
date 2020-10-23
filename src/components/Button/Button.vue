<template>
    <PrimeButton
        v-bind:label="label" 
        v-bind:badge="badge" 
        v-bind:class="[classColor, classSize, classRounded, classStyled, classRaised]" 
        v-bind:icon="classIcon" 
        v-bind:iconPos="iconPos"
        v-bind:disabled="disabled" />
</template>

<script>
    import {PrimeButton} from '../../prime';

	import '../../variables/variables.scss'

	/**
	 * Кнопка
	 * @displayName Button
	 */
	export default {
		name: 'Button',
		props: {
			/**
			 * Текст на кнопке
			 */
			label: {
				type: String,
				default: 'Button'
            },
            /**
			 * Цвет кнопки
             * @values primary, secondary, success, info, warning, help, danger
			 */
			color: {
				type: String,
				default: 'primary'
            },
            /**
			 * Стиль кнопки
             * @values fill, outline, blank
			 */
            styled: {
                type: String,
                default: 'fill'
            },
			/**
			 * Счетчик на кнопке
			 */
			badge: {
                type: Number,
                default: null
            },
            /**
			 * Иконка
             * @values cross, check, user, search, ellipsis-v, pi-ellipsis-h
			 */
            icon: {
                type: String,
                default: ''
            },
            /**
			 * Расположение иконки
             * @values left, right
			 */
            iconPos: {
                type: String,
                default: 'left'
            },
			/**
			 * Размер кнопки
			 * @values s, m, l
			 */
			size: {
                type: String,
                default: 'm'
            },
            /**
			 * Круглая
			 */
            rounded: {
                type: Boolean,
                default: false
            },
            /**
			 * Заблокированная
			 */
            disabled: {
                type: Boolean,
                default: false
            },
            /**
			 * Рельефная
			 */
            raised: {
                type: Boolean,
                default: false
            },
		},
		computed: {
            classSize() {
                let size;
                switch (this.size) {
                    case 's':
                        size = 'p-button-sm';
                        break;
                    case 'l':
                        size = 'p-button-lg';
                        break;    
                    case 'm':
                        size = 'p-button';
                        break;    
                }
                return size;
            },
            classIcon() {
                let icon;
                switch (this.icon) {
                    case 'cross':
                        icon = 'pi pi-times';
                        break;
                    case 'user':
                        icon = 'pi pi-user'; 
                        break;
                    case 'check':
                        icon = 'pi pi-check';
                        break;
                    case 'search':
                        icon = 'pi pi-search';
                        break;
                    case 'ellipsis-v':
                        icon = 'pi pi-ellipsis-v';
                        break;
                    case 'ellipsis-h':
                        icon = 'pi pi-ellipsis-h';
                        break;        
                }
                return icon
            },
            classRaised() {
                return (this.raised) ? 'p-button-raised' : ''
            },
            classStyled() {
                let styled;
                switch (this.styled) {
                    case 'fill':
                        styled = '';
                        break;
                    case 'outline':
                        styled = 'p-button-outlined';
                        break;
                    case 'blank':
                        styled = 'p-button-text';
                        break;        
                }
                return styled;
            },
            classRounded() {
                return (this.rounded) ? 'p-button-rounded' : ''
            },
            classColor() {
                let type;
                switch (this.color) {
                    case 'primary':
                        type = '';
                        break;
                    case 'secondary':
                        type = 'p-button-secondary'; 
                        break;
                    case 'success':
                        type = 'p-button-success';
                        break;
                    case 'info':
                        type = 'p-button-info';
                        break;
                    case 'warning':
                        type = 'p-button-warning';
                        break;  
                    case 'help':
                        type = 'p-button-help';
                        break;
                    case 'danger':
                        type = 'p-button-danger';
                        break;            
                }
                return type
            },
        },
	}
</script>

<style lang="scss" scope>

	@import '../../variables/variables.scss';
    @import '../../../node_modules/primeicons/primeicons.css';
	
</style>