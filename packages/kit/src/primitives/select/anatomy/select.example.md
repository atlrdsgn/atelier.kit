### Basic Select Anatomy

```tsx
export default () => (
  <Select css={{width: 200}}>
    <SelectTrigger>
      <SelectValue placeholder={'Select an option..'} />
      <SelectIcon />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent sideOffset={5}>
        <SelectScrollUpButton>⌃</SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Primitives</SelectLabel>
            {options.map((options) => (
              <SelectItem key={options.type} value={options.value}>
                {options.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>⌄</SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </Select>
)
```
