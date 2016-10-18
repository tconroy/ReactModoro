import { connect } from 'react-redux'
import { FooterTabs } from '~/components'
import { setFooterTab } from '~/redux/modules/activeFooterTab'

function mapStateToProps({activeFooterTab}, {navigator}) {
  return {
		activeFooterTab,
    navigator
	}
}

function mapDispatchToProps(dispatch) {
  return {
    onTabSelect: (tab) => dispatch(setFooterTab(tab))
  }
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(FooterTabs)