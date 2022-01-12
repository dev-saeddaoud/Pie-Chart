<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import { expenses } from '../../stores/expenses';

  let title: string = '';
  let amount: number = 0;
  let type: string;

  const addEntry = () => {
    let newEntry = { id: uuidv4(), type, title, amount };
    console.log(newEntry);
    expenses.update((prevValues) => {
      let newValues = [newEntry, ...prevValues];
      return newValues;
    });
    title = '';
    type = null;
    amount = 0;
  };
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={addEntry}>
    <h3 class="form__title">Add Income/Expense</h3>
    <div class="form__group">
      <select bind:value={type}>
        <option value={null} disabled>Select Type</option>
        <option value="inc">Income</option>
        <option value="exp">Expense</option>
      </select>
    </div>
    <div class="form__group">
      <label for="title">Title</label>
      <input type="text" id="title" placeholder="title" bind:value={title} />
    </div>
    <div class="form__group">
      <label for="amount">Amount</label>
      <input
        type="number"
        min="0"
        id="amount"
        placeholder="amount"
        bind:value={amount}
      />
    </div>
    <div class="btn-container">
      <button type="submit" class="btn">Add</button>
    </div>
  </form>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .form__title {
    width: 100%;
    display: block;
    font-size: 24px;
    text-align: center;
    letter-spacing: 2px;
  }

  .form__group {
    margin: 20px 0;
  }

  .form__group select {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
  }

  .form__group select:focus {
    outline: none;
  }

  .form__group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .form__group input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
  }

  .form__group input:active,
  .form__group input:focus {
    outline: none;
    border: none;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 18px;
    background-color: var(--bg-color);
    color: var(--text-color);
    border: none;
  }
</style>
