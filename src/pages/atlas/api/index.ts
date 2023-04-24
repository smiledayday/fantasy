import { get } from '../../../services/index'

export const unreadNotify = () => {}

export const fetchAtlasDetail = (params: { atlas_id: number }) => get('/napi/vienna/atlas/detail/', params)

export const getComment = () => {}

export const attentionOnePerson = () => {}

export const cancelAttention = () => {}
