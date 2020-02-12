import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/components/layouts/globalStyles'
import React from 'react'

addDecorator(s => <><GlobalStyle />{s()}</>);
