import React from 'react'
import {TouchableOpacity} from 'react-native'
import { FormInput } from '../../Components/Forms'
import SvgIcon from '../../Components/SvgIcon'
import {Label} from '../../Components/Text'
import {View} from '../../Components/Layout'
import { Colors, ApplicationStyles, Metrics } from '../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

const { height } = ApplicationStyles.formRow
const SEARCH_HEIGHT = moderateScale(height, 0.3)

const ICON_SIZE = moderateScale(20)

const SearchContainer = styled(FormInput)`
  fontSize: ${moderateScale(18)}px;
  backgroundColor: ${Colors.silver};
  borderRadius: ${moderateScale(24)}px;
  height: ${SEARCH_HEIGHT}px;
  paddingLeft: ${ICON_SIZE + Metrics.spaceHorizontal * 2}px;
  color: ${Colors.text};
`

const Search = React.forwardRef((props, ref) => {  
  const navigation = useNavigation()

  return (
    <SearchContainer
      ref={ref}
      noMargin
      noBorder
      placeholder='Search'
      placeholderTextColor={Colors.lightGray}
      {...props}
    >
      <View 
      pointerEvents="none"
      style={{
        position: 'absolute',
        left: Metrics.spaceHorizontal
      }}>
        <SvgIcon name="Search" fill={Colors.lightGray} width={ICON_SIZE} height={ICON_SIZE} />
      </View>

      <TouchableOpacity 
      onPress={() => navigation.navigate('ContactAdd')}
      pointerEvents="none"
      style={{
        position: 'absolute',
        right: Metrics.spaceHorizontal
      }}>
        <Label style={{
          color: Colors.secondary
        }}>ADD</Label>
      </TouchableOpacity>
    </SearchContainer>
  )
})

export default Search
