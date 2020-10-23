```html
<ButtonGroup buttonsWidth="flex">
    <Button color="secondary" label="Отменить" size="l" />
    <Button label="Сохранить" size="l" />
</ButtonGroup>
```

Группа кнопок объединенная контекстом. Например панель инструментов.
```html
<ButtonGroup join>
    <Button label="Редактировать" styled="outline" />
    <Button label="Удалить" styled="outline" />
</ButtonGroup>
```

Комбинированная кнопка
```html
<ButtonGroup join>
    <Button label="Сохранить" />
    <Button label="" icon="ellipsis-v" />
</ButtonGroup>
```