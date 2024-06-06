import React from 'react'

const ProjectPreview = ({data}) => {
    const { name, category, key } = data;

    return (
        <div className='svg-information' style={{ textAlign : 'right' }}>
            <svg width="720" height="586" viewBox="0 0 720 586" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration showing preview of Jira project interface after the project creation is done">
                <path fillRule="evenodd" clipRule="evenodd" d="M370.025 17.9079C434.256 22.6735 503.767 7.79394 556.943 40.6745C610.66 73.8893 624.33 136.807 649.809 190.907C678.228 251.252 739.504 312.537 713.872 373.89C688.153 435.452 591.852 436.828 531.607 473.835C474.196 509.102 439.255 580.301 370.025 585.109C300.167 589.961 241.321 540.007 189.315 497.609C141.938 458.986 117.437 406.978 88.5028 355.603C53.1707 292.869 -12.2428 234.212 1.99552 165.015C16.473 94.6556 86.9077 40.1425 159.374 11.1767C225.234 -15.1486 298.243 12.582 370.025 17.9079Z" fill="#2684FF"></path>
                <g filter="url(#create-project-shadow)">
                    <rect x="20" y="80" width="640" height="400" rx="8" fill="var(--ds-surface, white)" stroke="var(--ds-background-accent-gray-subtler, #EBECF0)" strokeWidth="1" filter="create-project-shadow"></rect>
                </g>
                <rect x="42" y="142" width="20" height="20" rx="10" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="78" y="148" width="100" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="42" y="178" width="20" height="20" rx="10" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="78" y="184" width="100" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="42" y="214" width="20" height="20" rx="10" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="78" y="220" width="100" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="42" y="250" width="20" height="20" rx="10" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="78" y="256" width="100" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="42" y="286" width="20" height="20" rx="10" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="78" y="292" width="100" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="42" y="322" width="20" height="20" rx="10" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="78" y="328" width="100" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="42" y="358" width="20" height="20" rx="10" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="78" y="364" width="100" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="40" y="100" width="24" height="24" rx="6" fill="#2684FF"></rect>
                <rect x="204" y="80" width="2" height="400" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="239" y="148" width="16" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="271" y="132" width="2" height="334" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="285" y="148" width="64" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="361" y="132" width="2" height="334" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="377" y="147" width="120" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="513" y="132" width="2" height="334" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="527" y="148" width="64" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="603" y="132" width="2" height="334" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="613" y="148" width="24" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="239" y="186" width="16" height="16" rx="4" fill="var(--ds-background-accent-blue-subtle, #4C9AFF)"></rect>
                <rect x="377" y="189" width="120" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="527" y="186" width="64" height="16" rx="3" fill="var(--ds-background-accent-gray-subtler, #C1C7D0)"></rect>
                <rect x="616" y="184" width="20" height="20" rx="10" fill="var(--ds-background-accent-red-subtler, #FF8F73)"></rect>
                <rect x="239" y="228" width="16" height="16" rx="4" fill="var(--ds-background-accent-blue-subtle, #4C9AFF)"></rect>
                <rect x="377" y="231" width="70" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="527" y="228" width="64" height="16" rx="3" fill="var(--ds-background-accent-gray-subtler, #C1C7D0)"></rect>
                <rect x="616" y="226" width="20" height="20" rx="10" fill="var(--ds-background-accent-blue-subtler, #4C9AFF)"></rect>
                <rect x="239" y="270" width="16" height="16" rx="4" fill="var(--ds-background-accent-blue-subtle, #4C9AFF)"></rect>
                <rect x="377" y="273" width="120" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="527" y="270" width="64" height="16" rx="3" fill="var(--ds-background-accent-blue-subtler, #B3D4FF)"></rect>
                <rect x="616" y="268" width="20" height="20" rx="10" fill="var(--ds-background-accent-blue-subtler, #4C9AFF)"></rect>
                <rect x="239" y="312" width="16" height="16" rx="4" fill="var(--ds-background-accent-blue-subtle, #4C9AFF)"></rect>
                <rect x="377" y="315" width="120" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="527" y="312" width="64" height="16" rx="3" fill="var(--ds-background-accent-blue-subtler, #B3D4FF)"></rect>
                <rect x="616" y="310" width="20" height="20" rx="10" fill="var(--ds-background-accent-orange-subtler, #FFC400)"></rect>
                <rect x="239" y="354" width="16" height="16" rx="4" fill="var(--ds-background-accent-blue-subtle, #4C9AFF)"></rect>
                <rect x="377" y="357" width="120" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="527" y="354" width="64" height="16" rx="3" fill="var(--ds-background-accent-blue-subtler, #B3D4FF)"></rect>
                <rect x="616" y="352" width="20" height="20" rx="10" fill="var(--ds-background-accent-red-subtler, #FF8F73)"></rect>
                <rect x="239" y="396" width="16" height="16" rx="4" fill="var(--ds-background-accent-blue-subtle, #4C9AFF)"></rect>
                <rect x="377" y="399" width="120" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="527" y="396" width="64" height="16" rx="3" fill="var(--ds-background-accent-green-subtler, #ABF5D1)"></rect>
                <rect x="616" y="394" width="20" height="20" rx="10" fill="var(--ds-background-accent-blue-subtler, #4C9AFF)"></rect>
                <rect x="239" y="438" width="16" height="16" rx="4" fill="var(--ds-background-accent-blue-subtle, #4C9AFF)"></rect>
                <rect x="377" y="441" width="120" height="8" rx="4" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="527" y="438" width="64" height="16" rx="3" fill="var(--ds-background-accent-green-subtler, #ABF5D1)"></rect>
                <rect x="616" y="436" width="20" height="20" rx="10" fill="var(--ds-background-accent-orange-subtler, #FFC400)"></rect>
                <rect x="224" y="102" width="180" height="16" rx="8" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="624" y="102" width="16" height="16" rx="8" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="600" y="102" width="16" height="16" rx="8" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="576" y="102" width="16" height="16" rx="8" fill="var(--ds-background-accent-gray-subtler, #DFE1E6)"></rect>
                <rect x="226" y="172" width="420" height="2" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="226" y="214" width="420" height="2" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="226" y="256" width="420" height="2" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="226" y="298" width="420" height="2" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="226" y="340" width="420" height="2" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="226" y="382" width="420" height="2" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <rect x="226" y="424" width="420" height="2" fill="var(--ds-border-disabled, #EBECF0)"></rect>
                <foreignObject style={{ textAlign: 'left', fontWeight: 700 }} className="sc-1elwbop-0 jJALEh" width="122" height="18" x="72" y="103">
                    <span width="122" height="18">{name || 'Untitled project'}</span>
                </foreignObject>
                <text fontSize="14" x="280" y="198" fill="var(--ds-text-subtle, #7A869A)">{key ? key : 'KEY'}-1</text>
                <text fontSize="14" x="280" y="240" fill="var(--ds-text-subtle, #7A869A)">{key ? key : 'KEY'}-2</text>
                <text fontSize="14" x="280" y="282" fill="var(--ds-text-subtle, #7A869A)">{key ? key : 'KEY'}-3</text>
                <text fontSize="14" x="280" y="324" fill="var(--ds-text-subtle, #7A869A)">{key ? key : 'KEY'}-4</text>
                <text fontSize="14" x="280" y="366" fill="var(--ds-text-subtle, #7A869A)">{key ? key : 'KEY'}-5</text>
                <text fontSize="14" x="280" y="408" fill="var(--ds-text-subtle, #7A869A)">{key ? key : 'KEY'}-6</text>
                <text fontSize="14" x="280" y="450" fill="var(--ds-text-subtle, #7A869A)">{key ? key : 'KEY'}-7</text>
                <text fontSize="12" x="110" y="460" textAnchor="middle" fill="var(--ds-text-subtlest, #6B778C)">
                    {category || 'Project Category'}
                </text>
                <defs>
                    <filter id="create-project-shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="10" floodColor="#000" floodOpacity="0.2"></feDropShadow>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default ProjectPreview