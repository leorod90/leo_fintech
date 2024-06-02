import * as DropdownMenu from 'zeego/dropdown-menu'
import RoundBtn from './RoundBtn'

export default function DropDown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RoundBtn title='More' icon='ellipsis-horizontal' onPress={() => { }} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        {/* <DropdownMenu.Label /> */}
        <DropdownMenu.Item key='statement'>
          <DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            // androidIconName='@android:drawable/ic_menu_search'
            androidIconName='@android:drawable/ic_menu_agenda'
            ios={{
              name: 'list.bullet.rectangle.fill'
            }}

          />
        </DropdownMenu.Item>
        {/* <DropdownMenu.Item key='statement'>
          <DropdownMenu.ItemTitle>test</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            androidIconName='@android:drawable/ic_menu_search'
            ios={{
              name: 'list.bullet.rectangle.fill'
            }}

          />
        </DropdownMenu.Item> */}
        {/* <DropdownMenu.Group>
          <DropdownMenu.Item />
        </DropdownMenu.Group>

        <DropdownMenu.CheckboxItem>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger />
          <DropdownMenu.SubContent />
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />
        <DropdownMenu.Arrow /> */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}