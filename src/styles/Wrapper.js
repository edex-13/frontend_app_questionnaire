import { css } from 'styled-components'

export const wrapper = ({ maximumSize = '1340px', paddingSize = '16px' } = {}) => (
  css`
    max-width: ${maximumSize};
    height:100%;
    padding: ${paddingSize};
    margin: auto;
  `
)
