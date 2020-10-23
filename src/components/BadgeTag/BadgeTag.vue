<template>
	<span 
	class="p-tag"
	v-bind:class="[classColor, classSize]"
	>{{label}}</span>
</template>

<script>

    import '../../../node_modules/primevue/resources/primevue.css';
    import '../../../node_modules/primevue/resources/themes/nova/theme.css';
    import '../../variables/variables.scss';

    /**
	 * Бейдж статус
	 * @displayName BadgeTag
	 */
	export default {
		name: 'BadgeTag',
		props: {
            /**
			 * Надпись на бейдже
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
				default: 's'
			},
			/**
			 * Цвет
			 * @values primary, secondary, success, info, warning, help, danger
			 */
			 color: {
				type: String,
				default: 'primary'
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
                        size = 'p-tag-xl';
                        break;    
                    case 'm':
                        size = 'p-tag-lg';
                        break;    
                }
                return size;
            },
			classColor() {
                let color;
                switch (this.color) {
                    case 'primary':
						color = 'p-tag-primary'; 
                        break;
                    case 'secondary':
                        color = 'p-tag-secondary'; 
                        break;
                    case 'success':
                        color = 'p-tag-success';
                        break;
                    case 'info':
                        color = 'p-tag-info';
                        break;
                    case 'warning':
                        color = 'p-tag-warning';
                        break;  
                    case 'help':
                        color = 'p-tag-help';
                        break;
                    case 'danger':
                        color = 'p-tag-danger';
                        break;            
                }
                return color;
            },
		}
    }        
    
</script>

<style lang="scss" scope>

	@import '../../variables/variables.scss';
    @import '../../../node_modules/primeicons/primeicons.css';
	
</style>