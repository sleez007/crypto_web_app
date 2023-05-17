export class FormatInput{
    static formatToCurrency(value: number){
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        }).format(value)
    }
}
