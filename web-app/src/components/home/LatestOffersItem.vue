<template>
    <!-- Korišten je v-col zato što se ova komponenta ugniježđuje u v-row -->
    <v-col cols="12" sm="6" md="6" lg="4" xl="3">
        <v-card max-width="374" min-width="160" class="mx-auto">
            <v-card-text>
                <v-row align="center">
                    <v-col cols="6">
                    <v-img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABa1BMVEX///8qPo6yHlPUOl/UH1/RH17XH2AhicrQH17++vsre73LHlzGHlq9Hlcrf8DJHlsrhMQkO5LAHljYjqgjOpWUncZygLLQfZoqbrOzFFDv8ffdH2Le4e29ElOzFE/57vMqUJz55+vgNV/HbIlgbqzYNV7HYoIqWaPur77xvMh+u+LoorLih5oqZKsrdbgVjdUqSZfa6vUqYKjLz+Arks9TY6U7m9bQc5W+NGbfTXD22+HkY4DggZdGoNjO4/Lyxc/hSG3ji6jvytfeo7fJU3rkAFm1wtyiyOZnsOHqmazR5/S41uzedIveWnqRv+Ljf6HaN3PjZI3jcpfroLrfU4PjRn7riqjpVIfjL3DpcJnnXo7QNGrsmrfNSnfMAFDSU3/wGGb4NXjydp/yWYv3q8K3AEXgq7zBRG8SMJGJk76hqs1ZZ6Zkg757h7mVsNRelMqfz+xbs+QoqOSp2vF0msmDqdMeVKhUebZSisWECOD8AAAV2klEQVR4nO2di1/ayBbHUXkYARW1XQjSCNsooIIgUokKFK2g4KNWd93aWu/e3XbrbrXbq9Y//86ZRzIJo31agvL7tB9h8pxvzjlzziQah6O1krQXWotPocWStC33ofPxXaYQndw+dHldh3vxaKtPpUVS4k+dTq+31+t1On9LSK0+nVaotLPv7qVyObd3Kq0+oR8uZcvpdvUacrkPtu6WKSjPesNAwMUEn8Pbf9wdCkpiN+w2+q9jcIefl+4GBamy4w6TbjsNkYawe+suhAXtxfahk++/m+fgPtx+dtuzBeWPXbfbIOB2usOHYbfOASi4n8aVVp/mTSrx1O3UncCNeh4O7yR+exJGn926SyAKt9chtKeGDbhB4aO9EmpPbB+F8XfDFnZuZ+KovEChsJcgIATCey/IIunxXjjMQUDjpPvZ7XMIJb4bdvZyCBCBX4zop23tGxRgnHSGdxO3i4KU2HG6cUqkG8H+ToXPBaTS72HdIUi24Ny5TdlCZWvbSdJCZgRPfm26ykpi70lYh0CKiFtTVSvP9pwuVB/qZhB+sv9MFPOiL7BDMHfwel3u3VsRFqTErhN1h0cQ3rnq8mq/UQguAsHb63xZ+qGnewOSKq8OXQMYAfWEcPja0b/0HFFg3oC2G3AdPtXaOSxI0ce9zgFA4CUIEIHdTxSH0rNfMQVqCN4Br7P3RbRtKUSXX7q8PooAXMGNMoJPRzntxV7Y7WKG4B3weV27r9szZ5Je73i9Pp/BwBne/6XyORdUqmy5w06Dgc/n9e6042RbZecAzt43wKJB+PB5RRDkE1uCoKeUfj10s4hAdnPwqN2KCOUxIaAzQEYgCgTR39AVFxUH0rN9yCt1BkBhuJ3GSWX5wDs0NEQQIAa9Lvf2YwEB5XEY2TwqHl8Ieqf8so9MARhgCGh/3vnX7UJBqbyK+Pw6Axjk90XTQ0ocxb5eNA72usXFQWVn39nLDAHtz+8bWBG5k+0kaY98ET8gYAyc7qeCgCaVUD6kTyGhvElQHEgw32AwGPL7I0M/2T9b0IZfIgIGAx/Kd0V3kSq/7MP8ERPKHITFgTa55+z1GQz8Q5GXy/YeJ6XlFT8RZTDg7hVlBFGUCHEEiMK/iooDDaVZHAPQymsbm0IFEQjxDK5IdOO7YdZvIvZtN9G8MqTbvTwDdIRxu46T0UcRf3d3t8FgwPVS0CdH5TkEAgOAjgHCwlNRHhk/cA0YDLq7Q/7IIzs6RHS5O9LdzTHweXefCcJcdEtEgKPwWGneShl+6fUZDJAi88t2GyGUxEok1M0z8B2IYlx0cg8yAhECAgFqClEM1VDSxTPoDkVWbDXZJlV+9j/o7uYY+LxbgtJAiT91u3tdTveVDGDq3e0UFQdSZWfAxzHo7n7g/9k+YUEbntcJYAZDkVfinAdPqTmvZYDWcDm3RTlV9PXLyBDHAFGYH7bHZJuy/MYf6uaEEhnRVFn0MSbgsiA4OjpqgoBWOhClz9HhoYifP1TIv7Jsg3HytYVAKOITxWxp+cBNplLIdJqO4D/P/3PEmwJmgNZ0HsQFvYMk1Hw4/5tWO4S28qfplLofDK0IzkkqvTr0+oABm1JkBH7XHNrvBgVqCGhNX6/zlWi2obQyZD6i/8/x1o6TjyKm8xHbpqRtwWzKgNUMkA2Q/CFu2IJuCKhI6PVuCTIsBeWiD0xHjQzfeD+v0088g1DozbIw56ezKWAGLj03ODr67x/M56N//JeEBWIHLsIAbSIsDrThNw9syiDkF9V06LJBouuz2sHRvqmQ0H7ZP7LaAd5MVBxI2k+RBzZkgHIWkfsmxg9wJW0wwGZw9OR3Cy9J+/3JEc2TDAaoWj4QFQdK5Y0RG+3CICTMXaOPSMELDAY4Bk/2RHdOEvtHhIGLzZyQrf0/iaaZludD9mLwQBSblWF/JESLB45BOLx3xT0G6RncgzcY0DIpFOkWAdZWHtiLwc9NvaIlhJ/ZAfUFVA88vnos02BqhfOFIVooRlZKTRSU8ZDNGFhOUS8hzAxcbuHUIrddaSccdlkZQHHwkzXcRG3OwCghTAzc4aefLPaU+POwu4lBd6ipOLA3AzQehljAMhj4vOHtPz4npYs+2w43MSAJGH8UWzNIrPAlhB4UnYdbn5vUajuHTjYscEUSosA5kp0ZPDKXEGxWqVc4TXaVKq96vU0M0HH+NPprZwYrphqCDI4+76v4F+56+RWCYGXQHXmkr2BnBuPmsyY3BYQP31wvuFUxdDsYdPsjvq+b7pG0x76IZWftySASGf+spw5EUiorkfa3g1Dk224WK6/nTRNHbcjAP//NDw0ow/P+NmYQmn/0PeZ9tZ+Nees2YxDyj4tutX2NXo+z6bO2YhB6sPIdHyaLLtP7WO3EIDL/fR8TkLRhf6StGPgj49/9cRFJG0em0C4MIuKpxW+WlHgTaRMGKy9v7P6Xsnwwrn+xM4PXN3kftGIMNfZhEMJqmkv7AYqO04O3mMHwwTyRaPr7hhX9mR77oLUMlChVCx4JkaItPHhHHXXUUUcdddTRNRqdpRr98Y8JSrP6wX/4sXnd/2sE66/78g8/9ugcO/i9H35sXvcDXVgBjsHNWoSx99GH9OAj9mNwb/bmjietHuuf7cxgbubtTTnG6P3AfeOLnRmMjMwc3wQF+W1XYOSd/tXWDFDbX3Oz35uCfDwzgvrbPgy6AoF3s98zOMqzD0dgv+3EADVN3Pt+4/bs2xmy1/ZigEzh7+8UFkbvsX22GwPU2vXwe4yTq3MBfZdtxwAovPtWh5h9GOB22IYM0JKZbwoLo++6TLtrSwYzM4G51a8NC/LxRGCm6xYwmJm5ePdV2YK8+g9sPXMbGIyNXQTPv9whZs+yF2Nj7clgLGBFMDYxkf148mWmkDkPTkxMjAEEE4P2qBfujYxYGKDOZLPTffUv2HE1NZ1lDDgII4FVfRU7M0DV3UxAwGB6+rT4mbutX6K1KQSOQcBUkdqaAcpqHrIRjfoCIAgGg30nmc/YafE8hdadNgyBEbhvyrhszgANan8HeDugDFKpy+qnKGQ2B1MpQDCdzXJ2EAg8tAyxdmcAOT6Uul0sJDIGff21+nXBUa4u9felqB1wDEbmjq0ji/0ZOKTZ+yjJNTFIAYP+XPLqsFCvefr7+/p4XwAGga63zWOr3Rh0zQmKI2l1bsTCoK+vf3DQk98Um0ImmfMMDgKDlGEHCMKIsPRaHeuyF4NAQDiJeDzGxwPGwJPLvxesnMzlPM0MZmbmVgUrj97XR2C7MEBnMiaaLRh9m7X4AmaQy/1rcQi5/gG1EjtI8b4wd0+wW/keV0rZh0FX4K/7orJg9t3EGB8TEQPobP5Dcp1bq5jM53PYDkzx4CIrqjrl1b9H+HraPgxwDiNwXFT6XEwYDAwI/75n4+T6+w8YgSkcAANRsSWtWuvp1jJ491eXWXPC63YSRBCCRkDADPIfPvz7P7z4/b8IATUDsAPiC9mJj6Kie/StqSAB+ztuXusHSn7LFwegKyLYWTZrCQio10Bh3fG/fz9QBDQkprAdZKdFVZZ8PGGeUOga6Tpu9Z+FGb0fsNSJFx9FI1nxNDhN7ICHABQwAasZTAfPBAaFRtsLczEduLmbWl8iozggDBAFQUaD1rs0AgL1BkwhzxBANGDh4FJQZEqz/1yYJ1WsJUTrJB8bE7+kRrqYPhFQyJxcmiFQCpQAMwPE4FLkBqP3Ji5MtXRzCdFKjd4bGzHMYAwo/CM6veJ5P4mKCAJHIWdGcCmqLkdXPwIBjkGguYRoqaTZd9gUGAOU3UyficbJ+lmQQciZ5cGegKLBuaCckFb/IYmzUUcKx+HWSkbFAYVAGExkg+eC6ylXB82WwAgQBKlLUVlZPIOJNY5BAJUQrR4NRJKOuwI0HmAGkBKcCNaTz/sxBKCAOeCfxAgGq4KeyeeodKATKmM4JgZmRAOwLSS/GyPFMp0+y05nL+uCTmXOPRwFSgAh8JyLMoJqatrEABIx+4TCZs2+G9MNIYvnEINnRQGF+tlgP6agCwgIAoFcPyVTSjqDrgnhyGsjoeKga4ZjgJLe/hNR36qn/f06Bvh4KgwE56R0mM7qk4tfd7/mx2oUZbMkJhI7QLqsCk47sznY18/UJ5xnhIQiGOTtYMZOGcF1Gn17cWFiEOw7Fd1bKJ73oSGiDyQeQU5TQZ0BUL2YsFdGcK1mP16wewpBXC6m+kW9dNQHoYJICe87FE9J8aQzuLj4p30IgFY/GgGB1otJkRUjhxCVBo5MLQUIKANsBsJSzNaSTz7yhgAGnxNFvYwoVuBEKsWbQfbjiR1zok9p9izIDAG6A1Xz9fcWmOT6EikfDTP4KKrB2kHy7JnBAAzh+nsLTPQegxENsqj0aEcjIJJXU1mTIVx9b4Epk8yzCjpF59Qu2yAjuE7yeXCaNwSUHy9dcw9erubxdBqxA2wGwS98cMGOypzxhgAQ0rWrHKK+lKaTCCwapEQlRBsKpfzMEvppqZQUZQvrNVo+6tEgdfa5TyzYXvLJpQGBzB3km3LjzGbOgiB1utq+obBZxZN+EwREwTxOytUlVkEzBJ9+VKHNJBXPgiwukmrRw4+T9RqeVOYQpITJdZtLqg8GmSXoFIgpZDgCdEQ4Fc063AZt9usQCIW0p4rcYNOT1gmQxOCy2upTvTllzgeZPzAKS5t5E4Gr7i7cItXxHQaGAUj0D7J5FKzUoGhK7XZJrp+S2GhgIAQwg1TfmWgS9tYpU0UOwYyB/wFuIKqkb6Uy5ylmC4ZgPPysRzhvi4qnKZNwUnR2lwiAqpcWCsJp11suciee6e4EArOK531QUKL/g3cqEJgkz57iaWfh7bg7I3m1Lyu8236nlLnzBDrqqKOOOuqoo4466qijjjrqqKOOOuqoo7aUBO+TUKRPNkpS00S4xNokXc27tzSav5KlTVsK99QsWc5kZNHU7BULULNoda00udhoNKYmS9yrpaKkcXEtYTRWJicnLS/p1lgTfKBKlEyvqJIS0Mg1lWAbid/DpEZ+lMwbJQwI9c1qtfkpV7lYTdaQkvX1z1qQqW/i1mrdfF9HiS+UVaJyg735Rko09MaFOHvfx2RMVTdMb96JNmJqbBFONR5TdRUafJc12FNs0miYQqsW9O7ChrGEQyugPW3om5XK5m2SaU86bb0hVUzmPZ40/re0yS+s1/JodfjHL5CrSznclvbkavwdTm1RVXuY1PIaRq9MlY1WVW3Qfk+iNnWKfwNKHJZPEQY9hlR1QUclrcESdcHYbAo1qHp3YUPEQIqjncfWdLZqj9rgjoQYeDwWBpt5j6E09xhwMidasF5Lc80541cqtAXoqxrDQp9iU9C6ENMbYXFsIaoz6ClzrxjGW3MMYsZ+9D4qPZhm2Xiv7RRZwcwAd7uHmQcAKfNuJ2CAm9B1BcGHHINQsywg9rO+RL6k+9NkeU1mvMlFmqxoGph/DJv6Im7cmNQ0LY4a4YQVnYG6oBssvcQ6A3UtgRRfLEMfF6kzwzpAyriqmEFPrGFm4CgV9LW0gkqvxtUM3pOObxYz63Vy4amv4FXTebQggxYgu8cPumUImdr79UzxPcFBLSGOr+wkOT0pUcBXLwF9KK/Rc06UdSPFDHoMN63g7waDGDWRBHYHulPYvIG6V9bfskUYoP1IJgbSFKCK408x5Jamtw41MciQa0mb6kvY6vHHNG/pmVqePOu3Cc30s0OGZ4M9xHCi2JaN0FMBK1DAKNU1PSYnVNYjwkAtU1+XsMvwDFg3p4wvqB3FUXBvPZBQBpSKsaG2gdaCQFIC6uZ3QjcxwA013aeLEBvS0Cl8vZP6ejJ50i2T1zutIyHeABdSXbAMw6WCyhs8uT74lAgDkxWbGTAPTsSYuUiIMuIJJAoskDAG6kbFDI/4kwRsYw3zWVkZyHDh89yTfFVs3cjtobNLTY801LHVcNtjJmjglCZjTcCJf3C2gUixflMGtK9KWb2WAd4v+BUKblJBNUwLGBQKKg0tHAMJDKFHA2B85BUxqEMf+N+WywCUJdlRBSvftCLA26f5hx+xISDXkCD4qZZ3bkprKu+8SFE4tQ3KYAMuLB7owGkbDaEvNBgQaZGOcbByIaozUDcSGzhQSqYNK3A+CwWIPxbjtDJ4D13ln+qVa2AYGWwPuabHm2TsIXyOVQQGiJWEPd/yxjNs+gV+XIKooW5ImIHaSKBvECJLZTDmKVVgB2QogP1CrMejYlQ1ginhgQMqCv4JayDBBmJ9B6KVAb7cfFflJHGOTfhhLFhPJpPvZeI6Hn6HmX7iO1LjKju4msFCFPmKWtCAH/IYEwN1ERLeqQ08/q/RfdHQsggdVwwGGs0oEiWeAZhcj8UMr2ZgsgPMYB0z4OzgPUoI8sAgbWWQpgzWuAFNF1h8mQ8SeLSm8QBdIQUH+cky9A7bupEjQVqlkrQKD/Q40k9FUZ6hJYxYTxk4ALbas9jDMcDDKmLZ9Da+pnhgdftMjcRCCxwYKVGUIL5gSqdpPMDDnjkXcZAwRvpFpWexhAF4QU8ZVko4LAxYqhzrmQJjxvkviiBYeCAwMVAW2TYGA1O2eA0DHP5rXEMR+l6jwdIYMykDR5V1mQlDAXvRILSXDd8jSdqC+TSwfWJroQz0RE+yMmA102IJ7wmnH6zVGFAYAwekDRYGCkSjDWs0EOQHuA9Gp3BIhBiHPd9wBsag6CEh04QMD6ESjkF6AFIWcTq4ZmrEQYNk94yBgnsU0xwWBiRXLmls0iGhGjUErjxIZqEzcFQK6tcyIOmg3lecBuLATxLCIrcaMMDOoJcIqHigyBzE1dEJxeGkpdKCik0eX3i1TBshwqmqxjMgsRwHvUXRuMD6swCdnWICb8B1kMGAJOJfxYAYAs35SUmYxn+cUs5jHGSyQU5SBjSRJDUk/DYpl0nhk1Bj5YVGoxBj0aFCGnsatFFVSTDTGSDbIGWUhYE5nJfMGRhcdHXKzMAxGfsCBvkl9re1qjTT86Q9S7XakidNs0QMJGdekMYMSLBEg0StVsthSrqtSHFsjqoaI51dwJcyUWAVNf5ZINWNwQB5cgOveK0dwJBaMEZePJ5AeswzoIX05zHw0AmANI5uxSW9RjZPCNTzpgXMA6o51myaVsBXq0EDVg9MJNGjVxbLMdoYQ2mRxC6aGqNxQiF9Q5kmN49ktgMNWvh8L14mDVNoGz0QKw3ThmisUA1AVgZMJMJnNvNpncoS9+B3MZljq6MLr/8aYb3m0Zs95t85jiYWCyqM6htTJX1cVkpTG9CoFhrGhGK8UCg0TOcnTaEm3M9EuVAwzXo41lCL6YpGG7B9FC8wEkFtgd9QWSvwC3Vt5k0iA4Jc3CSzY7ma+XdC5XpyCVsNWlA02GRgjg1m0paSTU/IKlGtVCpp5vcES82N+G3GkmVT+nphqWlZ89q0xbJAafpmOQbuVUbGM8JYmYxstNfr9WLG2iOHLK+LFsiZImpeF05Ed9RRRx111FFHSP8Hm5qnIcrmyW4AAAAASUVORK5CYII="
                        alt="Company logo"
                        width="92"
                        contain
                    ></v-img>
                    </v-col>
                     <v-col
                        class="text-end"
                        cols="6"
                        >
                        <v-chip
                        class="mr-4"
                        color="orange"
                        >
                        U planu
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-title>
                Široki Brijeg - Genova
            </v-card-title>
            <v-card-subtitle>
                Raspoloživo: 7 m<sup>3</sup>, 10 t
            </v-card-subtitle>
            <v-card-text>
                <p>Planirano vrijeme polaska: 14.1.2022.</p>
                <p>Planirano vrijeme dolaska: 15.1.2022.</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    :to="offerLink"
                >
                    <v-icon class="ma-1">mdi-eye</v-icon>
                    Detalji
                </v-btn>
            </v-card-actions>
        </v-card> 
    </v-col>
    
</template>

<script>
export default {
    name: "LatestOffersItem",
    props: {
        offer: {type: Object, required: true}
    },
        computed: {
        offerLink() {
            return {
                name: "offer",
                params: {
                    id: this.offer.id,
                    slug: "i-am-offer-slug"
                    }
            }
        }
    }
}
</script>