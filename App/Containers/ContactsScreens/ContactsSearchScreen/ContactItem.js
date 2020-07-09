import React from 'react'
import styled from 'styled-components'
import { View } from '../../../Components/Layout'
import { Label } from '../../../Components/Text'
import SvgIcon from '../../../Components/SvgIcon'
import { ApplicationStyles, Colors, Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'

export const PICKER_ITEM_HEIGHT = moderateScale(80, 0.3)
const CARET_SIZE = moderateScale(14)

const ItemContainer = styled.TouchableHighlight`
  width: 100%;
  height: ${PICKER_ITEM_HEIGHT}px;
  paddingHorizontal: ${Metrics.spaceHorizontal}px;
  justifyContent: center;
  ${props => props.isSelected && 'backgroundColor: ' + Colors.purple}
  borderBottomWidth: 1px;
  borderBottomColor: ${Colors.lightestGray};
`

const NameLabel = styled(Label)`
`

const PhoneLabel = styled(Label)`
  marginTop: ${moderateScale(2)}
`

const Item = props => {
  const { contact, onPress, isSelected, ...allProps } = props

  return (
    <ItemContainer
      underlayColor={Colors.silver}
      onPress={onPress}
      isSelected={isSelected}
      {...allProps}
    >
      <>
        <NameLabel
          large
        >{contact.firstName + " " + contact.lastName}
        </NameLabel>
        <PhoneLabel
          gray
          small
        >+{contact.phoneNumber}
        </PhoneLabel>
        <View 
        pointerEvents="none"
        style={{
          position: 'absolute',
          right: Metrics.spaceHorizontal
        }}>
          <SvgIcon name="RightChevron" fill={Colors.text} width={CARET_SIZE} height={CARET_SIZE}/>
        </View>
      </>
    </ItemContainer>
  )
}

Item.defaultProps = {
  underlayColor: Colors.silver
}

export default Item
