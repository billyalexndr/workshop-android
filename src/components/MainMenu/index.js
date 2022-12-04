import { Grid } from '@chakra-ui/react'
import React from 'react'
import { Card, Header } from '..'

export default function index() {
  return (
    <>
      <Header />
      <Grid templateColumns='repeat(7, 1fr)' gap={2}
        paddingX={20}
      >
        <Card />
        <Card imageUrl="https://i.pinimg.com/236x/0e/75/e8/0e75e832aefe1f72b17f5059e9c17fea.jpg" />
        <Card imageUrl="https://i.pinimg.com/564x/8b/ff/dd/8bffdd16478f2aabb6591fb0ef2a88e0.jpg"/>
        <Card imageUrl="https://i.pinimg.com/564x/63/35/df/6335df31e1cfd6924c456b2329d5ff50.jpg" userName="Billy Alexander" />
        <Card imageUrl="https://i.pinimg.com/564x/aa/25/42/aa254237ad5d875cbfc1481a3e50e45c.jpg" userName="Sir Ginger" />
        <Card imageUrl="https://i.pinimg.com/564x/aa/25/42/aa254237ad5d875cbfc1481a3e50e45c.jpg" userName="Sir Ginger" />
        <Card imageUrl="https://i.pinimg.com/564x/aa/25/42/aa254237ad5d875cbfc1481a3e50e45c.jpg" userName="Sir Ginger"/>
        <Card imageUrl="https://i.pinimg.com/564x/54/2a/6a/542a6a949e349b4a9d480023ffe13686.jpg
" userName="Monie Skamander" />
        <Card imageUrl="	https://i.pinimg.com/564x/81/be/70/81be7016556f7cf55b8770a16b11f7d8.jpg" userName="Jai Jai"/>
      </Grid>


    </>
  )
}
