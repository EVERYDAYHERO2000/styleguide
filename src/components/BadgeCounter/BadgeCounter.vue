<template>
	<span 
	class="p-badge"
	v-bind:class="[classColor, classSize]"
	>{{counter}}</span>
</template>

<script>

    import '../../../node_modules/primevue/resources/primevue.css';
    import '../../../node_modules/primevue/resources/themes/nova/theme.css';
    import '../../variables/variables.scss';

    /**
	 * Бейдж со счетчиком
	 * @displayName BadgeCounter
	 */
	export default {
		name: 'BadgeCounter',
		props: {
            /**
			 * Cчетчик
			 */
			counter: {
				type: Number,
				default: 0
			},
			/**
			 * Размер
             * @values s, m, l
			 */
			 size: {
				type: String,
				default: 's'
			},
			/**
			 * Цвет
			 * @values primary, secondary, success, info, warning, help, danger
			 */
			 color: {
				type: String,
				default: 'danger'
            },
		},
		computed: {
			classSize() {
                let size;
                switch (this.size) {
                    case 's':
                        size = '';
                        break;
                    case 'l':
                        size = 'p-badge-xl';
                        break;    
                    case 'm':
                        size = 'p-badge-lg';
                        break;    
                }
                return size;
            },
			classColor() {
                let type;
                switch (this.color) {
                    case 'primary':
						type = 'p-badge-primary'; 
                        break;
                    case 'secondary':
                        type = 'p-badge-secondary'; 
                        break;
                    case 'success':
                        type = 'p-badge-success';
                        break;
                    case 'info':
                        type = 'p-badge-info';
                        break;
                    case 'warning':
                        type = 'p-badge-warning';
                        break;  
                    case 'help':
                        type = 'p-badge-help';
                        break;
                    case 'danger':
                        type = 'p-badge-danger';
                        break;            
                }
                return type
            },
		}
    }        
    
</script>

<style lang="scss" scope>

	@import '../../variables/variables.scss';
    @import '../../../node_modules/primeicons/primeicons.css';
	
</style>