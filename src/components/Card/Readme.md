```html
<Card>
    <template slot="title">
        Сохранить изменения?
    </template>
    <template slot="content">
        Вы внесли изменения в данные, но не сохранили их
    </template>
    <template slot="footer">
        <ButtonGroup buttonsWidth="flex">
            <Button color="secondary" label="Отменить" size="l" />
            <Button label="Сохранить" size="l" />
        </ButtonGroup>
    </template>    
</Card>
```