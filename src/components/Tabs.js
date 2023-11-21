import { React, useState, useContext } from 'react';
import shortid from 'shortid';
import { Grid } from '@mui/material';
import Cards from './Cards';
import { Button } from '@mui/material';
import { ThemeContext } from '../contexts/theme';
export default function VerticalTabs() {
    let { theme, setTheme } = useContext(ThemeContext)

    let projects = [
        {
            id: shortid.generate(),
            pro: "Starbucks",
            type: "HTML",
            des: "Landing Page For Starbuks",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/29/4d/32/11/r.jpg"
        },
        {
            id: shortid.generate(),
            pro: "CRUD",
            type: "JS",
            des: "Basic CRUD App for Sign Customers",
            img: "https://www.atatus.com/glossary/content/images/size/w960/2021/07/CRUD.jpeg"
        },
        {
            id: shortid.generate(),
            pro: "Chatify",
            type: "Api",
            des: "Full Social Media App with Api",
            img: "https://www.ailoitte.com/blog/wp-content/uploads/sites/2/2022/11/How-to-Create-a-Social-Media-App-Like-Instagram-and-TikTok-1.png"
        },
        {
            id: shortid.generate(),
            pro: "Todolist",
            type: "React",
            des: "Super Todolist with beautiful Ui/Ux",
            img: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
        },
        {
            id: shortid.generate(),
            pro: "Apple",
            type: "HTML",
            des: "A beautiful Design for Apple Company",
            img: "https://i.ytimg.com/vi/UhZi8dmgGvg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWq3qGZhkf-jjyDGhpJyRZgkxtNQ"
        },
        {
            id: shortid.generate(),
            pro: "Coffee Shop",
            type: "HTML",
            des: "Full Landing Page for A Coffee Shop",
            img: "https://i.etsystatic.com/22792867/r/il/4e1751/3609435332/il_340x270.3609435332_qg7j.jpg"
        },
        {
            id: shortid.generate(),
            pro: "Chat-gpt",
            type: "Api",
            des: "Chat bot using Openai Api",
            img: "https://www.cairo24.com/UploadCache/libfiles/97/1/600x338o/288.jfif"
        },
        {
            id: shortid.generate(),
            pro: "TicTacToe",
            type: "JS",
            des: "Simple XO game",
            img: "https://www.cbc.ca/kids/images/titactoe_thumb.jpeg"
        },
        {
            id: shortid.generate(),
            pro: "Todolist",
            type: "JS",
            des: "Beautiful Design for Todolist",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAABOFBMVEUnoVT///8noFQmnFIklE4joFFVsnUlmFAkj0snnVIklk8jjEkcczwYZzUiiUgkkk0RUykAmUUhgUMSWCzU5tYXYjKFv5IdeD8XUCYffUK+yL8hhEWGm4kAPQJDpmUYZTQARRcATiLZ6tzm8OVisHba4NxOc1aWyKU3X0PF3czq8ezo7ekTk0dQqG01olysyrGexaZyqn8AiT14uIwARAAANQBIqWYLRyIAfDEAbisAMwAAjT4ASxMAUiTM1c1Bl1lttH+o0bIAWCEAYiRSfl0ARhGis6SHuJHDzMQjUjKlzq25174AlDcAgDDB1cScvKI3Z0Nlh2yFq41QjmF1k3tDbEwAWBmSp5gATABlkm+duKIAXyRAflBVmWclYTdbjWhLlV+txLFObVZyiXc5dEx8kIIyfUmGpo37fzglAAAZuUlEQVR4nO2d918aSRvAs+zyLixNUETAWLCdQIwhGCEUjYUYvSSaS/Tu0s5cyf//H7zzTN/d2YKSRPLh+eEuwuzszHf6PIV79yYykYlMZCITmchEJjKRiUxkIhOZyEQmMpGJTGQiE5nIRCYy1hLxlx9dPHcBh30k1EuiQfLdcHi8AxXBkSxEFaPRLBVegeAqbK0GyUL8BjQC+pkts8i9iP0JewGdEolDPf1qGM1GVzfOZiorK5WZs9N9PRuNeyeWHpvVVvxFO43G4/EhYAR2NFtPw/WCKsbVFcxWNbdUK2ezW1lWLEe5otnHm/bklefxukdiO4vNX7N+8uuz07quk4zCoZgNkv0oY4sacP/ZTJVX8LHuqqCSBZbN1SwrmFSyaHZW9cSzOqqF7l+L6OxMNq6buukl9bPTOvofyScUC6+yc5lBdYD87mWfnLkquN+J2yrozULTzlDJHM0U3aqo01YfdVyJFSx0RMKy6h2HWFjqD0/rFrDQR8ZiE2WNcoxubaq+XXnQMaUW9GOhVfdQ2UgFycuzq96JH3YM069rRIAFImEY9Y1Nu8wYWOoPt+uGYVmhO0YIFo1ELGN1HnsX2uKFjviy0LQ9lJMoWtQHBXrvyxii4QmDsLCgztuVGZtUjIxgYVjm6Fi8auXKica2d4JKIkPfFwlioZUTrILo1f8LejHK2BMGY4GqTcZIQ0gsgz61MIvMaFm0C8XWQ78U1TRv7iAWM600gxG1v7raL5VKa7aPXkNiPKY8WeDBgMawhaDEJCEsTnG/sEbHov8+2X7jn6SKCk3wcxZrn86RrK+vX8wPalLSN6iTERjZGenjwT/NLpJm96IvffpbDsNQ1oT1i3odFgvoIBIM1C+sG7BYqYLUsPBGrUlyfZD6Ta547frq4uLtQC4z6s60uQWL+8sgPSTd5rpo72q7CDDikei+ePwk3+1NgUxP95oX0qvaRU8YwKJu7mPZ0jEMuVugvoLXETJ5hmKBumq90Wq1Dy8PUKtcsUK8u398fNwlcpC/lDp+/6jb7aFKov9eiU9RcxMYEovd3TmoHEivWeIpvyIYMUtKqWl/dqcJiOnpfD5/kBf96E07lyZzhke/0Kor1RXtcR0GCeoZTPCMCfsL9PEQLHQzk84lU4t5VGReu/UlqAitycGfos5vm6wBp6e706JvQHMDDJnF3BTUbRFJPv87T1o7LCBuZn2WP1tq0izziyksi5qcOJExVXUhLKpo0vx1BrEw6w5hLKzQcyewMBLlQjKVQi3CWXxZwjWBZkIFFCiOuowEfJP//US0LenONhbT04upJJGUyOQohepndPgmq/Y7JZGCxIVCMnn4h0icLKAhpaoMZYEWik7lcd16cPbQJmermIU5FIu4bsTSuQIU95B3AMSCt5P4VHvbFQ0ID6QueXeuHiZRdzY7ggWCuYjqVgQpFNqvWMrBQRL1oS2e6cXyHHBH2FDaHEixzeeX6/dJxNhUjBLOItOpPKobe9sOeaDj+cIKv6YCCxNg4PJKLKAmKWimQpsP7JPmFEwBefoFkuQHUaUkbm6JBWppVOs0SLmc4/Pv2mUqmUs8592iCSjyQKKcToCky7lH/NtL3ItgxKtYWFW0m3hZeYSmCMUYQfuL4VhEdICBCoDkNSvC+hJuVNRO5fJHXt1Py7zYOUheRi3Im7uEW1BiATmgNSMGc1kslm5xpD30eYs/d7U0h3sQmkXQPsyCOTCWKIt3LpKO4aoNYaHBIqg9IksHXlvhgAIbDjSDAIth1tQI6Rl4QRKby/XlKdKoCenDPmvBIhQbBBHkzV3FLWhjkYJhg0toGpkG306c51OF1op4FWQKKBAJOAWi9dEQiS8OUmjGUCwlhEVmDwR1JrKMmpYkjEXofWcEw8AHX6u+IQqIi4cayujwYs0vURSwkcbvNTIJ0dzn0A0aNhbQvVFJdHhBhx9y3/ZSyRZveAQYZ4p2a3CmB9FRk/Ju08NETdcgISzqeM8NLGKCBfQFymKo8wi5oIKDt647WBTxZlLsAz5BC2IUGXwSJi3IT6/QgrmXEgvU/HgnQV5Q3xbVyyf/Y3/UyByLV2R2nYUS8+lk0M0n8YbEWR0yd27geRJ3DMzCFF3DHLpfSLd18ajMAsZpBk7YfBAc086M25rWUK7iAcwDHiwicbGhGBznxU4WrzcwmQoUKHGcn2BPjkU2in6hnZ2dPdQeYRYGvcMhJG4wX8g0XCxg/l5wlLqYZodHUkVbCxZcLMisB5lLLKZTn3ldYb1Jcmi0OPEH/K1NQUrBAq8jM8CigXZd+GqP3ufUh15HbEAcLGAti0cf2ErNJzJaQ6kFS12YE1UscO7i/FFCLP4Qf0zRLigKjP4hsyCt4sEiE0s0KojFR7yiCEH78puzgNwd/QJaQ1Thmpeaj11bC/ZRFZNeLO7ZWSwKFni9KSZslbWzyDNUHixeAovExwd22bpFv1Cz0O0sSKnFnO5gsZhse7PgYwSxyPMxQljk7KumzOK+PwtYUStkvrDwhE5mdfj/DebOsCxKx8pSP+EsoNRhWAxkFmTtdUyOUifCuUI+ahbkxoGxoFMn3XPdaO4MzYJO6VLGEXFnGcSCZ361NJ3ne/fafWWus863ujYYhAXc7L1sJdKw2aIQbrOmBrAQY+C+olT2acCPRfYZSziPWCTZH5oyV5H4KpgF3msl6Cbcse8cbq8VwCLCD5TQgq7eKj0zQKX2Y7EpZZ4/rIq/FP0iy0/0fy/5sjjDSoCPZN9JxoarX4xsjET4XktbVrHI8q31/JI/C1572HQfiiO8YjMVifCXnrO3KlmY2nMkMF+ws5msN6P9YnQsRB3We2RTZGchNbAfi3tS/wIWb8Sf+NxiYyGmC7TZhbkz7TV3VusNsqbGsF4Cn2bwkR0fakY8X0h9m7agvYXEnQw0tzcLkXcJ7zTFxcfbHt3WiWyzK/bEvvuLGN5rSTfJREa/19KlKV1runuzmOTw5Y03C1G9C3w30uZ/15qLjspmxSsvlubEBk/FgtzloH7RUN/ljLRfxPmBRJs/cO0vsvzLwbEnC5Q6y1WQ+IiXSrb5vZFWuiQTAss2KvoaTezYlkosNHRKleYLXXfMFyNmIeZ0zdVEYubU3i1Pee07I5Es35EBM7xnEzcY2vUlGyRYtShQwKXXlHs6kVigdeTVq1cfxdzJ15HRz50ol7rQKq9dwl2COI9InZmeYt1n9ngkmpXSaVNz5Igna2j7yTaMPcg3mpVGPuoWJLF7GWH7i07j5cuX+C7Hudca+f4C5RLn93aohocFqQXlKqKBPWU7p+50Dw7brYa1tbB/Kumaro7p3U2iIX2qvc610IBHJ+5V2bLhYmlOOsWqWDzCQi751CwyI2UhdQyt+rmdJi2IWlsyTenfx8uIYOEhte4cGSLpWGbP9k3lbHvj2abt8VJzjl30eN13amBjoMnnEYvd5Vij3msBC70ja4FnHrXg1uTXJ8/kYp/T+78gFuf0precMIzGI/+0a+SuOVlQXfF53eVw25z6yOdOyEU3G/ZCViuVFfsnb+nAFvedajlaBl0TuRwzjcZzv7TQhWDc4atfT11RJkHvclYqNlnZH/n9BeQSN42//Ftw0Jyjs0DDlwVWQdJuYeqmb8/od6dYporbTue9Vnrv+WO7LHwbFroV84UxoIoTWT+iqt2nHkZBL/l1lG3rrxWPxFfNKZ6pYSoq47jjSzgVZ/rI91rkuts0En95V/JrF6sWUza9mZvEUZehwC0NWggrUW6/UT3RPyeaW6Y4URgdUBZEbybf5ZgWvdD5BnMnVqzF0u1rdR1r7wiKRdzz1SxqJ/OfiLUJ1kASrQJkm0nk2odf+/bU1evz7vKU4KY2RiEsjFgMq2C91tTRsEgJFqCLRy34oe+sIyr3W1ZH0AKiOW51/+PH3z4fHa0TOXp3fv6p1+32pqmpQoqk08ngAxiF5Pv8xaC/Vqtqtdpa6epdl5IA5TY24lGaklAdImFB7nJMrjczRrTXgk6HWTCtBC/0YepPu3FZ6YKSILphbLNVz6SLydR0j5soTU1TmxZsq0DTMcZWJp1Dyd8fdJn0eszCA5TbzLhLVdrZzV9l6z2nwWuns81YhDV2lXJH+6fOy1b7stvs0UlLj1M1CLbeQS14eXk0PyidnJxcX7391GQk8gSFAZOAaaCE2MzHLvk8GJuAYQHVNREdv5VJlIuFpPMBkjiXThherQoHaGJotkal5hSNnUduwgLGAqoxKhfUjq9lotBJ9F0Pdfnj4+6yaEDS8Ynxmm5aMZQulQLTpEUhKbBeKYCGPsPHLxsm0DXgiTwXkricjnmigNI+WVjYs8mC4wNi/3uj+QKvnqQiqCyS2QNeS1gLpvK2JsSWKUWGgnR7SOcSsLohpq56RNIWYuuPco48Qey1sKkSGDz4nSVAZ4fAkwmDWnRaNpsDPHFkbjh3YkO2BDRSkg5VWcWpW9h+p2BrQtLcUEdm+gs2T6huuaJdcrlyGoxNTNmsmeqniS0MNg0iAtRI4rhnNSjHjGzdygmgfxsExTB2v/bsdTDeKuOyQ/XErMVbEGiwJqTNnRN9mdQNNVYibRdyqjaY7b9cI8gY6pRIY9sgEKCW8TeNpyViVp3YjhFPDoZNbsECcseFSpMOKvKwtSBtQsIsTe9dubpZ17HJuiGMLUkxsSuHs3bExAA/kpHbmDt+eFaCYLcM20sUMoQDiRp1JuPMI4JnUNaCadGAWJHJ60hg6LrdxYWoONW+QhH2iGQ6oSvcbpSl1fEjhuUhxlD+I6rsafEdYzXCv+VNSA1sba1NBgq5nY/LEom4SURkH694XGcS4GHFssIdipurqUVkNrQNRgRbV6nbhb9fl1+lM3MMUi3J0EchcnbguxZfWH08O3t6ujE7u/9gIZ7N1iVu7gLSN4iWk/h5SFw0aXggUYfrWtRdItEccf4ikSr6xCYLC6JB3GWIZu8J3zWxpd88XY1nPT3vIk+crwglLHXo7hF9XLU5NFZnoyp/L5/mzjp9x7biHtNfNIsOE+qjHpKZ5/Ush2x7zNcPKVAq2UB/PvaiWcejG3XXCqjEwT/POqu3pZh1cMItlxOfQ84WOiqnxduxmOkErk1eLLYbQ65HLhZ7MdXqHo0GkQB5ZdRdBb8tiwaUJ0yF3Cxcewx/ibhYlMuKHLLO93jJ84a8Vo+CRaucjoWqkYvFa7RthqooT8yhWPxXgC2pXYOeDdMpiLxqZOTDy61Z9Nuwm8543AHINXGx+HpYwCa+YTuGm4V0qmEooh6+uUpZgYs7acK5LYtDOPvGgltXweJ90vOyMRwLOMLiHDhN11ITAEOc+e7ZbMNuxuKA3i8Oz2L+AF9h3oLFp+lFu6Inq3R99pFKS7rCuDWLLr5KVilbAln08mrr49As6JU+p5nd0IaV63Y5Rm9Hb88CjOuKDtOwkCyWsN7zFiwcylDZmCC0fBZXnrdmYTcJGZIFtsQeGQvX92GE+7MiGRELhXL2e7Pwqkm1f1IqnfRr6m/Bn5VO4D+WRX6ULFQT59rVl6WnOzv3kezMfRmoeFQvqSPLT8RCMVv0vzzd2UUyN4e9XpePm28VVXh7yFWq8YW9v/768M8/57/Y5IvjiZMXvyhFMmDwr8k3Z+Hae//9FIOYmhKX6r3emjOV1r/kqnZ8T19I5qkmiskvjidKkPHSslOoevZGa+poWbiGyJcdRgJfpxPJX7phHHATjAgodosuxdK5k8WOkzFVX2A9juG2/fruLBz3NoOnuMBEv0J9f/H9uovFhfDBAo1/ucj0KEz+UbCgvvT2hDfeg4+WhWu6eAEoiMc79t0mvr9FyXmaUzsguehYYwU6i4JdFfXB8QBiMccYy8qqwo3PZiNm8cT+XW0HUOSxzg18t4nvL1YZOVn0u3lmVhpnPtY5WZyGMiViX8n945nQO4TAC4xvzsKxHiIW1HUb3LyZzgsUDsK9myWVbK+xzoLbGVDZczxQEr709oRYAeURc+YHstCWdom1W5o5ihGtCqqpy4hLcsvESlSUSFaJGG4W1Kc4ZhiSqsSyPO4cfzgLMJFPUd9odtGL/bcNh9WgpvUk/0e3GsDUFxzpS8KXXjftiUNFpPvm64izwNTRLCE0sUzf0KlUV9b6/ZPB4Gp+/t9/19dlD1aWShYFC2o+Eqyt+hEsIq5tZ78p+SvLNEwwiDm87B4fL2FZnp4WeySVRkLNQpF1KBLfgYU78lbt6FAqMMuF2gAlU2g/xQPS2A1ew7Igg0qiEPbm9puzUBzN+p9bjQwfI6ye2NaxiI1e8iRgD7FhUwRHwU+4hl8p7EXFj2LhPo/gvvF6r1OXtb+RCLGIIaY9KWbSk/O+ePVncQMU356F5NBol5XtB51sVNa9xrFxWK7IjHSYtYu6lceRhd/F7+bGQlbiATBiwsZDsnb5SVi4lj43jzrhEccGN8xMh4RR81ZmjiWLYJVZdXN2K4t17MzGw7Ibefw0LHQriAXIyumDbF3eKOq6lznGuLIAI8F6gCMRx7G90MERnHWbNYvXe8eRBdpQ+oZElWVmv1PXbSi83zuWLHSrEV7LXn0sTEf8b63HkQXqGJmX16FhaCt7nTB2NGPIgpqbt15r4WW7YVhmEI3xZIGvblufA9w2ZdlsZCybOcpPwoIfQd23u95SSeDLWr+7qDFlgUdJuthOXoeGsdKSzVF+GhYCRuEwdeWlS3bKq5afR83YsqA+OTHirXVU0kLJGw7jp2OhE3VPMpk6+P1IqVl3yn88oOXPxIKYs+vCW+ugeT5/ErSu9IUFxs/EgngimCb2XgJvrXy+122+my/58vhQ8IgFPd4smFOVkUlQGuDK1zvuvrtSeAKzunlHTB9rFtSpygS3xnRZuPIhHsvrXtNHCisPPAoyxizucQcl7KJXLhIcuHt0u++Ui8tFyh439OdiwVz0sKMfdW3EPLrdgZvF4ABb3apLMr4s6NGCjBTifkiMCCiPxXz3yMViretjXDSeLKL05+2iW1u8bzAc1FkXcLx32tlo1Z6PAd7YsUAEIk8e7M8+O9tcQevnaZRdYsaJEYGNx+FXJ4xPHsGgx5FFtrJi20FsdiTHS3btTYcLGi1tJ4t3PXVQvrFk4fim2gFHfF3ofjkPjKPt3GvQcJk/Bwun3whE0HNYXhAeGIfrZ7Ok4K+usowdC+ed73WrLJ8+JVUqTKYNNwt3COpxZeHKvNousJ+o4s/z7mF2nKrXd8teoejGj4WIIs4EvNncBy5Kw2W38suyRxTPcWThql31fbKgbOiIyh9gd87jVwXGkoXL4GBw6fDLkzJyzrQQLnkRfJx+ChZR989s/vHe4+e63N68pft3qF+EydKXRbzuYqEdHbIZw5Z91hXSWft7yTOM53dlIZtVeksgC5XxxZt2jpt3snJEVT7eYPb/Y9fUne4lRKnt+P7As/QD1L5nM6VVzqv/WrYdFyIRUTA72dn1ioD8nVjU+kjWKkGywX/325eF7tozEBqPGp16PRqPkjPsqlIPD7/C522k+D1YhJSHdXbM8u8XutOCncnMw+f7q/urjzeeefhsrj3dnZtSB4+/aywaBv29ZX8bJT28IYpDvuzuegWPv2ssWszi0J9F3PSPf+sp4Ek3lfecLu4Si+s2C3IRwEK3AqIGewhxQLIHab+zLGiYjHiQHZ/pH/fZQ9AI2Z3yuda6SywG72kA32AWVmMYoxwif9NuofztuzvHAsJkYL+VABZg8j6UhRLIv0/BcVP4TNxxFl0WGiKEHV+sFfDr5g75G6OYTnkFCb9rLI6ZB1QIOz4j0fot/GpS+2UHTxaLSa8g4XePRT4Mi3ss1LFXcG13zsyzGbwVPX6Z/I6y8J8vhIVSrv3B6YGqktKLHYaCeCv+SPuLYVkE9QvZXOufgf9IqQ1e0E6Bf/Y57REv/VuxiDzY2N5+/efXq/mh5Ir/7Cw6lsNZbW1trU9FZbtmGtRc68LTPmltQOJizNEw80UfpyLCYoW8mL52bbA07a1OCcUiUq83cu33B72loWSZeAnC0TvbaRBnyvtEpqTfW6UviRPbNYjbcND9dHFVgnDxVKq12sng3y+7BMQcjRzPo217skAnIfriJnnvEnFovQUL7P5XwL6Q1BsyWEhQbLq/cDtTst9RiHAWoAAxeHj0Xu+42Tyee4Fld+n+DqrHEguUQqNtl9NB9p04LAY4LtpfHCLohw8LE3df7gsZTmgocWh8HX52AFeSRcyGDp6R7ncjxCEdh0fnocYhPAySOSIiADuJgQCx1f1jK2Kje1xyqUwFbyfOECxIoI2cIsp5gLDzCF0mCizmOf3KdozA+08cbFqyT3LE26cuqTjaNonIF/FDQeLdx8r2F/s4cYaBQRqs7IxyHiQ5HFUC64nxzMidKUmgeEfsDaooJGEsiiJavAi1T+KOF2i49GA/Abpxga7GX+zrxBmGBY204QxzHigimiIN1SFinidiGdO5MZBp0GjxjvAlGCInEXgNT15MzHtEqG7f+TaYRYTEluBBzsOJIeKDy5HcScxzSxEGnyhNgQZE9UiTKCdF3B1zRRK+JI1/u43F2A2qkPrFN0ch2ktXRdn2EZ1GI6cwaMRu5k+p7OGchkVCjSdEZyTB9jPEPCMwXrpccmdw9jAUfbOMxEOE3HbG32YlpjR4DjzohPpV1D4JgEi/AmCR3x0KjJfugiGVHDwYwz7rB+Om4pOBz7tEqHEbX+GBeKuS3xzFLXD4ZRDiXfYwJzeqy8hJjEpCFyYU3qFffKNH74rcyQadyEQmMpGJTGQiE5nIRCYykYlM5HtLdCJM7v1vIkz+D5MaxpnhfHA2AAAAAElFTkSuQmCC"
        },
        {
            id: shortid.generate(),
            pro: "Prayers Times",
            type: "Api",
            des: "Perfet App for show prayers times",
            img: "https://www.islamicfinder.org/media/view/og-prayertimes.jpg"
        },
        {
            id: shortid.generate(),
            pro: "TicTacToe",
            type: "React",
            des: "The Best XO Game Made Ever!",
            img: "https://www.shutterstock.com/shutterstock/videos/1103397077/thumb/1.jpg?ip=x480"
        },
        {
            id: shortid.generate(),
            pro: "Prayers Times",
            type: "React",
            des: "This is The Best Alarm for prayers times",
            img: "https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2020/5/18/7/50/53/azaan.jpg"
        },
        {
            id: shortid.generate(),
            pro: "Weather App",
            type: "React",
            des: "App Shows the weather and its Humidity & Wind speed",
            img: "https://alao-media.s3.eu-central-1.amazonaws.com/blogs/img/Frame_for_blog_cover-1.jpg"
        },


    ]
    let html = projects.filter((p) => {
        return p.type === "HTML"
    })
    let js = projects.filter((p) => {
        return p.type === "JS"
    })
    let api = projects.filter((p) => {
        return p.type === "Api"
    })
    let react = projects.filter((p) => {
        return p.type === "React"
    })
    let [renderedPro, setRenderedPro] = useState(html)




    return (
        <div id='tabs-div' style={{ marginTop: "170px" }}>
            <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
                <h1 id='pros'>My Projects</h1>
            </div>
            <Grid container>
                <Grid xs={2}>
                    <div id='filt' style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", background: theme === 'mo' ? "rgb(61,61,61)" : "whitesmoke", height: "100%", justifyContent: "center", borderRight: "15px", borderRadius: "20px" }}>
                        <div id='htm' >
                            <Button onClick={() => setRenderedPro(html)} variant="outlined">HTML & CSS</Button>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <Button onClick={() => setRenderedPro(js)} variant="outlined">Javascript</Button>
                        </div>
                        <div id='ja' style={{ marginTop: "10px" }}>
                            <Button onClick={() => setRenderedPro(api)} variant="outlined">Javascript Api</Button>
                        </div>
                        <div id='re' style={{ marginTop: "10px" }}>
                            <Button onClick={() => setRenderedPro(react)} variant="outlined">React JS</Button>
                        </div>
                    </div>
                </Grid>
                <Grid xs={10}>
                    <div id='ards' style={{ width: "100%", display: "flex", justifyContent: "space-evenly", background: theme === 'mo' ? "rgb(61,61,61)" : "whitesmoke", padding: "20px 0px", flexWrap: "wrap", borderRadius: "20px", marginLeft: "5px" }}>
                        {renderedPro.map((p) => {
                            return <Cards key={p.id} title={p.pro} des={p.des} img={p.img} />
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}