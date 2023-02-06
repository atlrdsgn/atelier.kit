### Basic Select Anatomy

```tsx SelectModule.tsx
export default () => (
  <Select css={{width: 200}}>
    <Select.Trigger>
      <Select.Value placeholder={'Select an option..'} />
      <Select.Icon />
    </Select.Trigger>
    <Select.Portal>
      <Select.Content sideOffset={5}>
        <Select.ScrollUpButton>⌃</Select.ScrollUpButton>
        <Select.Viewport>
          <Select.Group>
            <Select.Label>Primitives</Select.Label>
            {options.map((options) => (
              <Select.Item key={options.type} value={options.value}>
                {options.value}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton>⌄</Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select>
)
```
