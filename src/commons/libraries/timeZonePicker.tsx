import TimezonePicker from 'react-timezone'

export default function TimeZonePicker() {
  return (
    <TimezonePicker
      value="Asia/Seoul"
      onChange={(timezone) => console.log('New Timezone Selected:', timezone)}
      inputProps={{
        placeholder: 'Select Timezone...',
        name: 'timezone',
      }}
    />
  )
}
