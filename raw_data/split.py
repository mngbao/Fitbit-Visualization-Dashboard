import pandas as pd
import numpy as np
import os

def process_csv():
    # 1. Combine the 2 existing parts
    print("Loading part 1 and part 2...")
    df1 = pd.read_csv('hr_part1.csv')
    df2 = pd.read_csv('hr_part2.csv')
    
    combined_df = pd.concat([df1, df2], ignore_index=True)
    
    # 2. Save the full combined file (for your local backup)
    combined_df.to_csv('hr.csv', index=False)
    print("Full file 'hr.csv' saved.")

    # 3. Split the combined dataframe into 3 equal parts
    # Using numpy to calculate the split points accurately
    split_dfs = np.array_split(combined_df, 3)
    
    for i, part_df in enumerate(split_dfs, 1):
        output_name = f"hr_part{i}.csv"
        part_df.to_csv(output_name, index=False)
        print(f"Saved: {output_name} (~{len(part_df)} rows)")

if __name__ == "__main__":
    process_csv()