import React, { useState, useEffect } from 'react'
import Airtable from 'airtable';

var base = new Airtable({ apiKey: 'keyMx6L7Z9LjE5XF8' }).base('appaCGplNqY1evEUb')

const GetRecipe = async () => {
  base('Recipes').select({ view: "Grid view" }).firstPage(records => {
    console.log(records)
  })
}

export default GetRecipe