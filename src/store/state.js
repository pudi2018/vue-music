import {playMode} from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [], // 随机播放时跟playlist不一样
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
