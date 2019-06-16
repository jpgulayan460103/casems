import axios from 'axios'
import _cloneDeep from 'lodash/cloneDeep'

export default {
    getList(formData) {
        return axios.get('api/products',{
            params: formData
        });
    },
}