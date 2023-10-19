# 하루스터디 Components

하루스터디에서 사용하는 공용 컴포넌트에 대한 라이브러리입니다.

## Accordion

### 사용예시

```tsx
function App() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>
          <h5>Title</h5>
        </Accordion.Header>
        <Accordion.Panel>Panel</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

### Accordion

아코디언 컴포넌트의 전체 레이아웃을 담당하는 컴포넌트입니다.

| props  |   타입    |               설명                | 필수 |
| :----: | :-------: | :-------------------------------: | :--: |
| $style | `CSSProp` | 커스튬 스타일을 위한 props입니다. |  X   |

### Accordion.Item

아코디언의 목록을 담당하는 컴포넌트입니다. 해당 컴포넌트는 props를 받지 않고 `Accordion.Header` 컴포넌트와 `Accordion.Panel` 컴포넌트를 감싸고 있어야 합니다.

### Accordion.Header

아코디언의 제목을 담당하는 컴포넌트입니다. 해당 컴포넌트에서는 `Accordion.Panel`의 제목과 `Accordion.Panel`을 열 수 있는 버튼을 포함합니다.

### Accordion.Panel

아코디언의 각 아이템에 해당하는 컴포넌트입니다. `Accordion.Header`의 펼쳐보기 버튼을 통해 볼 수 있습니다.

## Tabs

### 사용예시

```tsx
function App() {
  return (
    <Tabs>
      <Tabs.Item label="TAB1">CONTENTS1</Tabs.Item>
      <Tabs.Item label="TAB2">CONTENTS2</Tabs.Item>
      <Tabs.Item label="TAB3">CONTENTS3</Tabs.Item>
    </Tabs>
  );
}
```

### Tabs

탭스 컴포넌트의 전체 레이아웃을 담당하는 컴포넌트입니다.

### Tabs.Item

탭스의 아이템을 나타내는 컴포넌트입니다. 라벨을 props로 받으면 이 라벨은 서로 겹치지 않아야 됩니다.

| props |   타입   |              설명              | 필수 |
| :---: | :------: | :----------------------------: | :--: |
| label | `string` | Tabs.Item의 고유한 라벨입니다. |  O   |
